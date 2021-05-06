@echo off
set s=yarn start
wt -d "%CD%" cmd ; split-pane -d "%CD%\example" cmd /k %s% ; split-pane -H -d "%CD%" cmd /k %s%