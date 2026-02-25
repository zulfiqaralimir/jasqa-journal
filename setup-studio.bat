@echo off
echo ================================================
echo   JASQA Journal - Sanity Studio Setup
echo ================================================
echo.

echo Step 1: Authenticating with Sanity...
echo Please complete the login in your browser.
echo.
call npx sanity login
if errorlevel 1 (
    echo.
    echo ERROR: Authentication failed!
    echo Please try again or login manually with: npx sanity login
    pause
    exit /b 1
)

echo.
echo ================================================
echo Step 2: Initializing Sanity Studio...
echo ================================================
echo.
echo When prompted:
echo   - Select: Use existing project
echo   - Project: JASQA Journal (oK9wnokWK)
echo   - Dataset: production
echo   - Output path: studio
echo   - Template: Clean project
echo.
call npx sanity init
if errorlevel 1 (
    echo.
    echo ERROR: Studio initialization failed!
    pause
    exit /b 1
)

echo.
echo ================================================
echo Step 3: Copying schema files...
echo ================================================
echo.
if not exist "studio" (
    echo ERROR: Studio directory not found!
    echo Please run: npx sanity init
    pause
    exit /b 1
)

cd studio
xcopy /E /I /Y ..\sanity\schemas .\schemas
if errorlevel 1 (
    echo.
    echo ERROR: Failed to copy schemas!
    pause
    exit /b 1
)

echo.
echo ================================================
echo Step 4: Installing dependencies...
echo ================================================
echo.
call npm install
if errorlevel 1 (
    echo.
    echo ERROR: Dependency installation failed!
    pause
    exit /b 1
)

echo.
echo ================================================
echo   Setup Complete!
echo ================================================
echo.
echo Your Sanity Studio is ready!
echo.
echo To start the studio, run:
echo   cd studio
echo   npx sanity dev
echo.
echo Studio will be available at: http://localhost:3333
echo.
pause
