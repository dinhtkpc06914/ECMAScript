function fetchData(url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => callback(null, data))
        .catch(error => callback(error));
}

function loadHeader() {
    fetchData('../admin/header.html', (error, headerHtml) => {
        if (error) {
            console.error('Error loading header:', error);
            return;
        }
        document.getElementById('header').innerHTML = headerHtml;
    });
}

function loadFooter() {
    fetchData('../admin/footer.html', (error, footerHtml) => {
        if (error) {
            console.error('Error loading footer:', error);
            return;
        }
        document.getElementById('footer').innerHTML = footerHtml;
    });
}

export { loadHeader, loadFooter };
