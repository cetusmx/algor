import React, { useState, useEffect, useMemo } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Building2, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  Clock3, 
  XCircle, 
  Send, 
  RefreshCw, 
  Lock, 
  LogOut, 
  ExternalLink, 
  Search, 
  FileText,
  ChevronDown,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import SimpleHeader from '../components/SimpleHeader';

const DEFAULT_MEETING_LINK = 'https://meet.google.com/salesflow-demo';

export default function AdminDemos() {
  const [authToken, setAuthToken] = useState(() => localStorage.getItem('algor_admin_token') || '');
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [meetingLink, setMeetingLink] = useState(() => localStorage.getItem('salesflow_meeting_link') || DEFAULT_MEETING_LINK);
  const [expandedNotesId, setExpandedNotesId] = useState(null);

  // Authenticate
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setAuthError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Contraseña incorrecta');
      }

      localStorage.setItem('algor_admin_token', data.token);
      setAuthToken(data.token);
    } catch (err) {
      setAuthError(err.message);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('algor_admin_token');
    setAuthToken('');
    setBookings([]);
  };

  // Fetch Bookings
  const fetchBookings = async () => {
    if (!authToken) return;
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/bookings', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) {
          handleLogout();
          throw new Error('Sesión expirada o no autorizada.');
        }
        throw new Error(data.error || 'Error al obtener las citas');
      }
      setBookings(data.bookings || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authToken) {
      fetchBookings();
    }
  }, [authToken]);

  // Update Status
  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/admin/bookings/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (!res.ok) throw new Error('Error al actualizar el estado');

      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
      );
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSaveMeetingLink = (e) => {
    const newLink = e.target.value;
    setMeetingLink(newLink);
    localStorage.setItem('salesflow_meeting_link', newLink);
  };

  // WhatsApp Message Generator
  const generateWhatsAppLink = (booking) => {
    // Clean phone number (leave only digits)
    const cleanPhone = (booking.whatsapp || '').replace(/\D/g, '');
    const message = `Hola ${booking.name}, te saludo del equipo de SalesFlow.\n\nTe recordamos que tenemos programada nuestra demostración 1 a 1 para el ${booking.booking_date} a las ${booking.time_slot}.\n\nAquí tienes el enlace directo de acceso a la sala virtual:\n${meetingLink}\n\n¿Nos vemos puntuales? ¡Saludos!`;
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  // Filters & Metrics
  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      const matchSearch =
        (b.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (b.company || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (b.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (b.whatsapp || '').includes(searchTerm);

      if (!matchSearch) return false;

      if (statusFilter === 'ALL') return true;
      return b.status === statusFilter;
    });
  }, [bookings, searchTerm, statusFilter]);

  const metrics = useMemo(() => {
    const total = bookings.length;
    const pending = bookings.filter((b) => b.status === 'PENDING_CONFIRMATION').length;
    const confirmed = bookings.filter((b) => b.status === 'CONFIRMED').length;
    const completed = bookings.filter((b) => b.status === 'COMPLETED').length;
    return { total, pending, confirmed, completed };
  }, [bookings]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'CONFIRMED':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" /> Confirmada
          </span>
        );
      case 'COMPLETED':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" /> Realizada
          </span>
        );
      case 'CANCELLED':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/15 text-red-400 border border-red-500/30">
            <XCircle className="w-3.5 h-3.5" /> Cancelada
          </span>
        );
      case 'PENDING_CONFIRMATION':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
            <Clock3 className="w-3.5 h-3.5" /> Pendiente Recordatorio
          </span>
        );
    }
  };

  // If not logged in, show sleek login gate
  if (!authToken) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0b141a] text-slate-300 font-sans">
        <SimpleHeader />
        <main className="flex-grow flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-white text-center mb-1">Panel de Operaciones</h1>
            <p className="text-slate-400 text-sm text-center mb-6">
              Ingresa la contraseña de administrador para gestionar las demos agendadas.
            </p>

            {authError && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Contraseña de Acceso
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/20 disabled:opacity-50 cursor-pointer"
              >
                {loginLoading ? 'Verificando...' : 'Entrar al Panel'}
              </button>
            </form>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0b141a] text-slate-300 font-sans">
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold tracking-tight text-white">
              Sales<span className="text-orange-500 font-black">Flow</span>
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700">
              Operaciones
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={fetchBookings}
              disabled={loading}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer flex items-center gap-2 text-xs font-medium"
              title="Actualizar lista"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-orange-400' : ''}`} />
              <span className="hidden sm:inline">Actualizar</span>
            </button>

            <button
              onClick={handleLogout}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-red-500/20 hover:text-red-400 text-slate-400 border border-slate-700 transition-colors cursor-pointer flex items-center gap-2 text-xs font-medium"
              title="Cerrar sesión"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Salir</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-8 space-y-8">
        
        {/* Title & Meeting Link Setting */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-900/80 border border-slate-800 p-6 rounded-3xl">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Reuniones y Demos Agendadas
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Supervisión de prospectos en tiempo real y disparador de enlaces de acceso.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-3.5 max-w-md w-full">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
              Enlace de Sala Virtual (Link Fijo):
            </label>
            <input
              type="text"
              value={meetingLink}
              onChange={handleSaveMeetingLink}
              placeholder="https://meet.google.com/..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-orange-400 font-mono focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500">Total Demos</span>
            <div className="text-3xl font-black text-white mt-1">{metrics.total}</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-500">Pendientes Recordatorio</span>
            <div className="text-3xl font-black text-amber-400 mt-1">{metrics.pending}</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-500">Confirmadas</span>
            <div className="text-3xl font-black text-emerald-400 mt-1">{metrics.confirmed}</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
            <span className="text-xs uppercase font-bold tracking-wider text-cyan-500">Realizadas</span>
            <div className="text-3xl font-black text-cyan-400 mt-1">{metrics.completed}</div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Status Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {[
              { id: 'ALL', label: 'Todas' },
              { id: 'PENDING_CONFIRMATION', label: 'Pendientes' },
              { id: 'CONFIRMED', label: 'Confirmadas' },
              { id: 'COMPLETED', label: 'Realizadas' },
              { id: 'CANCELLED', label: 'Canceladas' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  statusFilter === tab.id
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nombre, empresa..."
              className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        {/* Bookings List */}
        {loading && bookings.length === 0 ? (
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-16 text-center text-slate-500 text-sm">
            Cargando reuniones registradas...
          </div>
        ) : filteredBookings.length === 0 ? (
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-16 text-center">
            <Calendar className="w-12 h-12 text-slate-600 mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-white">No hay citas en este filtro</h3>
            <p className="text-slate-500 text-sm mt-1">
              Las nuevas reservas aparecerán aquí automáticamente en tiempo real.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map((b) => {
              const isNotesExpanded = expandedNotesId === b.id;
              return (
                <div
                  key={b.id}
                  className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-5 md:p-6 transition-all hover:border-slate-700 space-y-4"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    
                    {/* Left: Client & Date Details */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex flex-col items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 mb-0.5" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-base font-bold text-white">
                            {b.name}
                          </h3>
                          {b.company && (
                            <span className="text-xs px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700">
                              {b.company}
                            </span>
                          )}
                          {getStatusBadge(b.status)}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                          <span className="flex items-center gap-1.5 text-white font-medium">
                            <Clock className="w-3.5 h-3.5 text-orange-400" />
                            {b.booking_date} a las {b.time_slot}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-slate-500" />
                            {b.email}
                          </span>
                          <span className="flex items-center gap-1.5 font-mono text-slate-300">
                            <Phone className="w-3.5 h-3.5 text-slate-500" />
                            {b.whatsapp}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex flex-wrap items-center gap-3">
                      {/* WHATSAPP TRIGGER BUTTON */}
                      <a
                        href={generateWhatsAppLink(b)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
                        title="Abrir WhatsApp con mensaje prellenado"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Enviar WhatsApp (1 Clic)</span>
                      </a>

                      {/* Status Dropdown */}
                      <select
                        value={b.status}
                        onChange={(e) => handleStatusChange(b.id, e.target.value)}
                        className="bg-slate-800 border border-slate-700 text-xs text-slate-300 rounded-xl px-3 py-2.5 focus:outline-none focus:border-orange-500 cursor-pointer"
                      >
                        <option value="PENDING_CONFIRMATION">🟡 Pendiente</option>
                        <option value="CONFIRMED">🟢 Confirmada</option>
                        <option value="COMPLETED">🔵 Realizada</option>
                        <option value="CANCELLED">🔴 Cancelada</option>
                      </select>

                      {/* Notes toggle button if notes exist */}
                      {b.notes && (
                        <button
                          type="button"
                          onClick={() => setExpandedNotesId(isNotesExpanded ? null : b.id)}
                          className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 text-xs cursor-pointer flex items-center gap-1"
                          title="Ver desafío del cliente"
                        >
                          <FileText className="w-4 h-4" />
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isNotesExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Expanded Notes Section */}
                  {isNotesExpanded && b.notes && (
                    <div className="mt-3 p-4 rounded-xl bg-slate-800/40 border border-slate-800 text-xs text-slate-300 space-y-1">
                      <span className="font-semibold text-orange-400 uppercase tracking-wider text-[10px]">
                        Desafío comercial / Notas del cliente:
                      </span>
                      <p className="leading-relaxed text-slate-300 font-light whitespace-pre-line">
                        "{b.notes}"
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </main>
    </div>
  );
}
