
    document.getElementById("schedule-button").addEventListener("click", function() {
        try {
            window.location.href = "scheduling.html";
        } catch (error) {
            console.error("Error while redirecting:", error.message);
        }
    });

