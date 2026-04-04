# jsDelivr GitHub Stats Explorer

Statistical analysis tool for GitHub repositories served by jsDelivr.

## Overview

jsDelivr GitHub Stats Explorer provides an interface to visualize and analyze the usage of any GitHub repository served by jsDelivr.
It offers insights into download hits, bandwidth consumption, and global rankings.

## Key Features

- **Data Fetching:** Directly connects to the jsDelivr Data API for up-to-date statistics.
- **Flexible Timeframes:** Analyze data across various periods.
- **Visual Trends:** Charts visualize hits and bandwidth over time.
- **Summary Metrics:** Overview of total hits, bandwidth, global rank, and type-specific rank.
- **Trend Analysis:** Calculates percentage changes compared to previous periods.
- **Detailed Logs:** A scrollable data table for daily records.

## How It Works

1. **Input:** Enter a GitHub username and the specific repository name.
2. **Select Period:** Choose the timeframe you wish to analyze (e.g., Last 30 Days, Last Quarter).
3. **Analyze:** Click "Run" to fetch and process the data.
4. **Explore:** Explore the data using the summary cards, charts, and data log.

## Tech Stack

- **React & TypeScript:** For type-safe application structure.
- **Tailwind CSS:** For the custom monochrome styling.
- **Recharts:** For data visualization.
- **Lucide React:** For clean, technical iconography.
- **Vite:** For a fast development and build experience.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.  
(c) 2026 Paul Köhler (komed3). All rights reserved.

---

*Data provided by the [jsDelivr Data API](https://github.com/jsdelivr/data.jsdelivr.com).*
