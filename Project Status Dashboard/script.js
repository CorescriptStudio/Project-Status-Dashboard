document.addEventListener('DOMContentLoaded', () => {
    // Select all data rows that have a data-progress attribute
    const dataRows = document.querySelectorAll('.data-row[data-progress]');

    dataRows.forEach(row => {
        const progressValue = row.getAttribute('data-progress'); // e.g., "85"
        const progressBar = row.querySelector('.progress-bar');

        // Use a small delay for a cleaner, staggered look
        setTimeout(() => {
            // Animate the progress bar width
            if (progressBar) {
                progressBar.style.width = `${progressValue}%`;
            }
        }, 100);
    });
});