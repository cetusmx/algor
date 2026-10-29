# Regenera algor-resumen-ejecutivo.pdf a partir del HTML usando Microsoft Edge en modo headless.
# Uso: .\generar-pdf.ps1   (desde esta carpeta o desde cualquier otra)

$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$html = Join-Path $here 'algor-resumen-ejecutivo.html'
$pdf  = Join-Path $here 'algor-resumen-ejecutivo.pdf'

$edge = @(
  "$env:ProgramFiles(x86)\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1

if (-not $edge) { Write-Error 'No se encontró Edge ni Chrome.'; exit 1 }

$tmp = Join-Path $env:TEMP ("algor-resumen-" + [guid]::NewGuid().ToString('N') + ".pdf")
& $edge --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 `
  --print-to-pdf="$tmp" "file:///$($html -replace '\\','/')" | Out-Null

$deadline = (Get-Date).AddSeconds(30)
while (-not (Test-Path $tmp) -and (Get-Date) -lt $deadline) { Start-Sleep -Milliseconds 500 }
if (-not (Test-Path $tmp)) { Write-Error 'No se generó el PDF.'; exit 1 }

try {
  Copy-Item $tmp $pdf -Force -ErrorAction Stop
} catch {
  Write-Error "El PDF existente está abierto en otro programa. Ciérralo y vuelve a ejecutar. ($($_.Exception.Message))"
  exit 1
} finally {
  Remove-Item $tmp -ErrorAction SilentlyContinue
}
Write-Host "PDF generado: $pdf"

# Copia publicada en el sitio (liga no enlazada): /docs/algor-resumen-ejecutivo-2026-10.pdf
$public = Join-Path $here '..\..\client\public\docs\algor-resumen-ejecutivo-2026-10.pdf'
Copy-Item $pdf $public -Force
Write-Host "Copiado a: $public"
