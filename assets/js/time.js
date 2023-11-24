<script>
      // Function to update the date
      function updateDate() {
         currentDate = new Date();
        var options = { year: "numeric", month: "short", day: "numeric" };
        var formattedDate = currentDate.toLocaleDateString("en-US", options);

        // Update the content of the element with id "currentDate"
        document.getElementById("currentDate").textContent = formattedDate;
      }

      // Run the function when the page loads
      window.onload = function () {
        updateDate();

        // Set up an interval to update the date every minute (adjust as needed)
        setInterval(updateDate, 60000); // 60000 milliseconds = 1 minute
      };
    </script>