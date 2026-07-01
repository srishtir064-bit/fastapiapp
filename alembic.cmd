@echo off
setlocal
cd /d "%~dp0backend"
call env\Scripts\python.exe -m alembic %*
endlocal
