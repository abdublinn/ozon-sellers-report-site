param(
  [int]$Port = 4173
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$pythonDir = "C:\Users\adubl\AppData\Local\Programs\Python\Python313"
$launcherDir = "C:\Users\adubl\AppData\Local\Programs\Python\Launcher"

if (Test-Path $pythonDir) {
  $env:Path = "$pythonDir;$pythonDir\Scripts;$launcherDir;$env:Path"
}

$pythonCommand = $null
if (Get-Command py -ErrorAction SilentlyContinue) {
  $pythonCommand = @("py", "-3.13", "-m", "http.server", "$Port", "--directory", "$root")
} elseif (Get-Command python -ErrorAction SilentlyContinue) {
  $pythonCommand = @("python", "-m", "http.server", "$Port", "--directory", "$root")
} else {
  throw "Python не найден. Открой новый терминал или проверь PATH."
}

Write-Host "Serving site from $root on http://localhost:$Port" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server." -ForegroundColor DarkCyan

& $pythonCommand[0] $pythonCommand[1] $pythonCommand[2] $pythonCommand[3] $pythonCommand[4] $pythonCommand[5] $pythonCommand[6]
