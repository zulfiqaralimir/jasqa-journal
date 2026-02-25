@echo off
echo ============================================
echo   JASQA Journal - Sanity Studio Deployment
echo ============================================
echo.

echo Step 1: Checking Sanity CLI installation...
call npx sanity --version
if errorlevel 1 (
    echo ERROR: Sanity CLI not found
    pause
    exit /b 1
)
echo.

echo Step 2: Deploying Sanity Studio...
echo.
echo You will be prompted for a studio hostname.
echo Suggested hostname: jasqa-journal
echo This will deploy to: https://jasqa-journal.sanity.studio
echo.
pause

call npx sanity deploy

if errorlevel 1 (
    echo.
    echo ERROR: Deployment failed
    echo.
    echo Troubleshooting:
    echo 1. Make sure you're logged in: npx sanity login
    echo 2. Check your internet connection
    echo 3. Verify project ID in sanity.config.ts
    pause
    exit /b 1
)

echo.
echo ============================================
echo   Deployment Successful!
echo ============================================
echo.
echo Your Sanity Studio is now available at:
echo https://jasqa-journal.sanity.studio
echo.
echo Next steps:
echo 1. Configure CORS in Sanity dashboard
echo 2. Deploy to Vercel
echo 3. Add content through Studio
echo.
pause
