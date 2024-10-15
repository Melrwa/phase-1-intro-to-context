// Your code here
    function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
        return {
          firstName,
          familyName,
          title,
          payPerHour,
          timeInEvents: [],
          timeOutEvents: []
        };
      }
      function createEmployeeRecords(employeeData) {
        return employeeData.map(createEmployeeRecord);
      }
      function createTimeInEvent(employee, dateStamp) {
        const [date, hour] = dateStamp.split(' ');
      
        // Validate date format
        if (!/^\d{4}-\d{2}-\d{2} \d{4}$/.test(dateStamp)) {
          throw new Error("Invalid date format. Expected 'YYYY-MM-DD HHMM'");
        }
      
        employee.timeInEvents.push({
          type: "TimeIn",
          hour: parseInt(hour, 10),
          date
        });
      
        return employee;
      }
      function createTimeOutEvent(employee, dateStamp) {
        const [date, hour] = dateStamp.split(' ');
      
        // Validate date format
        if (!/^\d{4}-\d{2}-\d{2} \d{4}$/.test(dateStamp)) {
          throw new Error("Invalid date format. Expected 'YYYY-MM-DD HHMM'");
        }
      
        employee.timeOutEvents.push({
          type: "TimeOut",
          hour: parseInt(hour, 10),
          date
        });
      
        return employee;
      }
      function hoursWorkedOnDate(employee, date) {
        const timeIn = employee.timeInEvents.find(event => event.date === date);
        const timeOut = employee.timeOutEvents.find(event => event.date === date);
      
        if (!timeOut) {
          throw new Error(`No matching timeOut found for the timeIn on ${date}`);
        }
      
        return (timeOut.hour - timeIn.hour) / 100;
      }
      function wagesEarnedOnDate(employee, date) {
        const hours = hoursWorkedOnDate(employee, date);
        return hours * employee.payPerHour;
      }
      function allWagesFor(employee) {
        return employee.timeInEvents.reduce((total, event) => {
          return total + wagesEarnedOnDate(employee, event.date);
        }, 0);
      }
      function calculatePayroll(employees) {
        return employees.reduce((total, employee) => {
          return total + allWagesFor(employee);
        }, 0);
      }
      function hoursWorkedOnDate(employee, date) {
        const timeIn = employee.timeInEvents.find(event => event.date === date);
        const timeOut = employee.timeOutEvents.find(event => event.date === date);
      
        if (!timeOut) {
          throw new Error(`No matching timeOut found for the timeIn on ${date}`);
        }
      
        const timeInDate = new Date(`${timeIn.date}T${String(timeIn.hour).padStart(4, '0').replace(/^(\d{2})(\d{2})$/, '$1:$2')}:00`);
        const timeOutDate = new Date(`${timeOut.date}T${String(timeOut.hour).padStart(4, '0').replace(/^(\d{2})(\d{2})$/, '$1:$2')}:00`);
      
        const hoursWorked = (timeOutDate - timeInDate) / (1000 * 60 * 60);
        return hoursWorked;
      }
      if (!timeOut) {
        throw new Error(`No matching timeOut found for the timeIn on ${date}`);
      }
           
                
        
      
      

