document.addEventListener("DOMContentLoaded", () => {
   window.onerror = function (message, source, lineno, colno, error) {
      console.log("Global error")
      console.log("Message:", message)
      console.log("Source:", source)
      console.log("Line:", lineno, "Column:", colno)
      console.log("Error object:", error)
   }

   const form = document.querySelector("form")
   const output = form.querySelector("output")

   form.addEventListener("submit", (e) => {
      e.preventDefault()

      const firstNum = form.querySelector("#first-num").value
      const secondNum = form.querySelector("#second-num").value
      const operator = form.querySelector("#operator").value

      try {
         const a = parseFloat(firstNum)
         const b = parseFloat(secondNum)

         if (isNaN(a) || isNaN(b)) {
            throw new Error("Inputs must be numbers.")
         }

         let result
         switch (operator) {
            case "+":
               result = a + b
               break
            case "-":
               result = a - b
               break;
            case "*":
               result = a * b
               break
            case "/":
               if (b === 0) throw new Error("Cannot divide by zero.")
               result = a / b
               break
            default:
               throw new Error("Unknown operator.")
         }

         output.textContent = `Result: ${result}`
      } catch (err) {
         console.error("error: ", err.message)
      } finally {
         console.log("finished")
      }
   });

   const people = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "Charlie", age: 35 }
   ]

   document.getElementById("log").addEventListener("click", () => {
      console.log("This is a console.log demo")
   });

   document.getElementById("error").addEventListener("click", () => {
      console.error("This is a console.error demo")
   });

   document.getElementById("count").addEventListener("click", () => {
      console.count("Button clicked")
   });

   document.getElementById("warn").addEventListener("click", () => {
      console.warn("This is a console.warn demo")
   });

   document.getElementById("assert").addEventListener("click", () => {
      console.assert(false, "This is a failed console.assert demo")
   });

   document.getElementById("clear").addEventListener("click", () => {
      console.clear()
   });

   document.getElementById("dir").addEventListener("click", () => {
      console.dir(document.body)
   });

   document.getElementById("dirxml").addEventListener("click", () => {
      console.dirxml(document.body)
   });

   document.getElementById("groupStart").addEventListener("click", () => {
      console.group("Grouped Logs")
      console.log("Inside group: Item 1")
      console.log("Inside group: Item 2")
   });

   document.getElementById("groupEnd").addEventListener("click", () => {
      console.groupEnd("Grouped Logs")
   });

   document.getElementById("table").addEventListener("click", () => {
      console.table(people)
   });

   document.getElementById("startTime").addEventListener("click", () => {
      console.time("timer")
   });

   document.getElementById("endTimer").addEventListener("click", () => {
      console.timeEnd("timer")
   });

   document.getElementById("trace").addEventListener("click", () => {
      function traceExample() {
         console.trace("Trace called")
      }
      traceExample()
   });

   document.getElementById("globalError").addEventListener("click", () => {
      idk()
   })

})