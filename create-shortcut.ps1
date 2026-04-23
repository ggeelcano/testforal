# Crea acceso directo en el escritorio que abre la app local
$desktop = [Environment]::GetFolderPath("Desktop")
$appPath = "C:\Users\josug\workspace\oposiciones-bizkaia\app.html"
$shortcutPath = Join-Path $desktop "TestForal.lnk"

$ws = New-Object -ComObject WScript.Shell
$s = $ws.CreateShortcut($shortcutPath)
$s.TargetPath = $appPath
$s.IconLocation = "C:\Users\josug\workspace\oposiciones-bizkaia\icon.svg,0"
$s.Description = "TestForal - Tests oposiciones Diputacion Foral de Bizkaia"
$s.Save()

Write-Host "Acceso directo creado en: $shortcutPath"
