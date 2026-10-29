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

Remove-Item $pdf -ErrorAction SilentlyContinue
& $edge --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 `
  --print-to-pdf="$pdf" "file:///$($html -replace '\\','/')" | Out-Null

$deadline = (Get-Date).AddSeconds(30)
while (-not (Test-Path $pdf) -and (Get-Date) -lt $deadline) { Start-Sleep -Milliseconds 500 }

if (Test-Path $pdf) { Write-Host "PDF generado: $pdf" } else { Write-Error 'No se generó el PDF.' }
