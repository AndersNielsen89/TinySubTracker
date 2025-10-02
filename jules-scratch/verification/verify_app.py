import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Construct the absolute file path to the index.html in the build directory
        file_path = os.path.abspath('/app/subscription-tracker/build/index.html')

        # Navigate to the local HTML file
        await page.goto(f'file://{file_path}')

        # Wait for the main content to be visible to ensure the app has loaded
        await page.wait_for_selector('div.AppContainer')

        # Take a screenshot
        screenshot_path = 'jules-scratch/verification/verification.png'
        await page.screenshot(path=screenshot_path)

        await browser.close()
        print(f"Screenshot saved to {screenshot_path}")

if __name__ == '__main__':
    # Start a server in the background
    import subprocess
    import time

    server_process = subprocess.Popen(
        ['python3', '-m', 'http.server', '8000', '--directory', '/app/subscription-tracker/build'],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )

    # Give the server a moment to start
    time.sleep(2)

    try:
        asyncio.run(main())
    finally:
        server_process.kill()