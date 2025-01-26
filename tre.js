        if (!amount || amount <= 0 || amount > balance) {
            displayMessage('Solde insuffisant ou montant invalide', 'dashboardMessage', 'error');
            return;
        }

        balance -= amount;
        transactionHistory.push({ type: 'Retrait', amount, date: new Date().toLocaleString() });
        updateBalance();
        updateTransactionHistory();
        displayMessage(`Retrait réussi! Nouveau solde: ${balance.toFixed(2)}$`, 'dashboardMessage', 'success');
    }

    function updateBalance() {
        document.getElementById('balance').innerText = balance.toFixed(2);
    }

    function updateTransactionHistory() {
        const historyContainer = document.getElementById('transactionHistory');
        historyContainer.innerHTML = '';
        transactionHistory.forEach(transaction => {
            const div = document.createElement('div');
            div.innerText = `${transaction.date} - ${transaction.type}: ${transaction.amount} ${transaction.finalAmount ? `(${transaction.finalAmount.toFixed(2)})` : ''}`;
            historyContainer.appendChild(div);
        });
    }

    function displayMessage(message, elementId, type) {
        const messageElement = document.getElementById(elementId);
        messageElement.innerText = message;
        messageElement.className = `message ${type}`;
    }

    function getDurationMultiplier(duration) {
        const timeValue = parseInt(duration.split(' ')[0]);
        if 

