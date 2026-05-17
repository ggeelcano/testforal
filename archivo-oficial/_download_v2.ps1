# Descarga lote 2: nuevas oposiciones Hacienda DFB
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$ProgressPreference = 'SilentlyContinue'
$base = $PSScriptRoot

$files = @(
    # === AGENTE FISCAL CENSAL 2024 (id=1977) ===
    @{ url='https://www.bizkaia.eus/lehendakaritza/Bao_bob/2024/11/14/I-1155_cas.pdf'; out='agente-fiscal-censal-dfb/convocatoria/BOB-2024-11-14-bases.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20241211101630_LEGISLACION%20AGENTES.pdf'; out='agente-fiscal-censal-dfb/convocatoria/legislacion-agentes.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20250314160716_Cuadernillo_TEST_Libre_castellano.pdf'; out='agente-fiscal-censal-dfb/examenes/2024-2025/01-test-libre.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20250314160903_Cuadernillo_TEST_Pr_Interna_castellano.pdf'; out='agente-fiscal-censal-dfb/examenes/2024-2025/02-test-promocion-interna.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20250314161158_AFC-TL-Plantilla1.pdf'; out='agente-fiscal-censal-dfb/examenes/2024-2025/03-plantilla-libre.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20250314161300_AFC-PI-Plantilla1.pdf'; out='agente-fiscal-censal-dfb/examenes/2024-2025/04-plantilla-promocion-interna.pdf' },

    # === ECONOMISTA 2022 ESTABILIZACION (id=1858) ===
    @{ url='https://www.bizkaia.eus/lehendakaritza/Bao_bob/2022/12/30/I-1216_cas.pdf'; out='economista-dfb/convocatoria/BOB-2022-12-30-bases-completo.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20231205145914_ESTABILIZACION_DEFINITIVO_version_1.pdf'; out='economista-dfb/examenes/2022/01-test-estabilizacion.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20240125142200_Plantilla%20Estabilizacion%20tras%20recursos.pdf'; out='economista-dfb/examenes/2022/02-plantilla-estabilizacion.pdf' },

    # === ECONOMISTA 2022 ORDINARIA (id=1898) ===
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20231205145526_ORDINARIO_DEFINITIVO_version_1.pdf'; out='economista-dfb/examenes/2022/03-test-ordinario-libre.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20231205150500_ORDINARIO_DEFINITIVO_PI_version_1.pdf'; out='economista-dfb/examenes/2022/04-test-ordinario-PI.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20240125142852_Plantilla%20Ordinario_tras%20recursos.pdf'; out='economista-dfb/examenes/2022/05-plantilla-ordinario.pdf' },

    # === TAG 2023 (id=1948) ===
    @{ url='https://www.bizkaia.eus/lehendakaritza/Bao_bob/2023/05/19/I-615_cas.pdf'; out='tag-dfb/convocatoria/BOB-2023-05-19-TAG.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20240224161311_Ordinario%202024II24.pdf'; out='tag-dfb/examenes/2023/01-test-libre.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20240224161541_Ordinario%20PromInterna%202024II24.pdf'; out='tag-dfb/examenes/2023/02-test-promocion-interna.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20240418114548_PLANTILLA%20ORDINARIA.pdf'; out='tag-dfb/examenes/2023/03-plantilla-libre.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20240418114746_PLANTILLA%20PROMO%20INT.pdf'; out='tag-dfb/examenes/2023/04-plantilla-promocion-interna.pdf' },

    # === TAG 2025 (id=1992) ===
    @{ url='https://www.bizkaia.eus/lehendakaritza/Bao_bob/2025/07/17/I-731_cas.pdf'; out='tag-dfb/convocatoria/BOB-2025-07-17-TAG.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20260131150819_Turno%20libre%20castellano.pdf'; out='tag-dfb/examenes/2025-2026/01-test-libre.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20260131150949_Turno%20Promoci%C3%B3n%20interna%20castellano.pdf'; out='tag-dfb/examenes/2025-2026/02-test-promocion-interna.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20260227140351_Plantila%2027022026%20Turno%20libre.pdf'; out='tag-dfb/examenes/2025-2026/03-plantilla-libre.pdf' },
    @{ url='https://www.bizkaia.eus/dokumentuak/07/ope/pdf/20260227140650_Plantilla%2027022026%20Promoci%C3%B3n%20interna.pdf'; out='tag-dfb/examenes/2025-2026/04-plantilla-promocion-interna.pdf' }
)

$ok=0; $fail=0; $i=0; $total=$files.Count
foreach ($f in $files) {
    $i++
    $dst = Join-Path $base $f.out
    $dir = Split-Path $dst -Parent
    if (-not (Test-Path $dir)) { New-Item -Path $dir -ItemType Directory -Force | Out-Null }
    Write-Host "[$i/$total] $($f.out)" -NoNewline
    try {
        Invoke-WebRequest -Uri $f.url -OutFile $dst -UserAgent 'Mozilla/5.0 TestForal-Archive/1.0' -TimeoutSec 60 -ErrorAction Stop
        $sz = [math]::Round((Get-Item $dst).Length/1KB, 1)
        Write-Host " OK ($sz KB)" -ForegroundColor Green
        $ok++
    } catch {
        Write-Host " FAIL: $($_.Exception.Message)" -ForegroundColor Red
        $fail++
    }
}
Write-Host ""
Write-Host "=== RESUMEN ==="
Write-Host "OK: $ok / $total"
Write-Host "FAIL: $fail"
