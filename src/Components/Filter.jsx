function Filter(props) {
    function checkDayExists(dateString) {
        // Split the input string into year, month, and day components
        const [year, month, day] = dateString.split('-').map(Number);
      
        // Create a new Date object using the input values
        const date = new Date(year, month - 1, day);
      
        // Check if the input values are valid
        if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
          return false;
        }
      
        // Check if the date is a valid day on the calendar
        if (date.getMonth() + 1 !== month || date.getDate() !== day) {
          return false;
        }
      
        return true;
      }
    return (
        <div>
          
        </div>
    );
}

export default Filter;