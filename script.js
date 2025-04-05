// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set the contest date (May 15, 2025)
  const contestDate = new Date("May 15, 2025 09:00:00").getTime()

  // Update the countdown timer
  function updateCountdown() {
    const now = new Date().getTime()
    const distance = contestDate - now

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Display the countdown
    document.getElementById("days").textContent = days.toString().padStart(2, "0")
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0")
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0")
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0")
  }

  // Update the countdown every second
  updateCountdown()
  setInterval(updateCountdown, 1000)

  // Contest data
  const contests = [
    {
      title: "Algorithm Challenge",
      description: "Test your algorithmic skills with complex problem-solving tasks.",
      date: "May 15, 2025",
      difficulty: "Advanced",
    },
    {
      title: "Data Structures Showdown",
      description: "Demonstrate your knowledge of data structures and their applications.",
      date: "June 20, 2025",
      difficulty: "Intermediate",
    },
    {
      title: "Beginner's Coding Cup",
      description: "A friendly competition for those new to competitive programming.",
      date: "July 10, 2025",
      difficulty: "Beginner",
    },
  ]

  // Populate contest cards
  const contestList = document.getElementById("contest-list")

  contests.forEach((contest) => {
    const contestCard = document.createElement("div")
    contestCard.className = "contest-card"

    contestCard.innerHTML = `
            <div class="contest-card-image">${contest.title}</div>
            <div class="contest-card-content">
                <h3>${contest.title}</h3>
                <p>${contest.description}</p>
                <span class="contest-date">Date: ${contest.date}</span>
                <span>Difficulty: ${contest.difficulty}</span>
            </div>
        `

    contestList.appendChild(contestCard)
  })

  // Form validation and submission
  const registrationForm = document.getElementById("registration-form")
  const registrationMessage = document.getElementById("registration-message")

  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const institution = document.getElementById("institution").value.trim()
    const experience = document.getElementById("experience").value
    const language = document.getElementById("language").value

    // Simple validation
    if (!name || !email || !institution || !experience || !language) {
      showMessage("Please fill in all fields.", "error")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      showMessage("Please enter a valid email address.", "error")
      return
    }

    // Simulate form submission
    // In a real application, you would send this data to a server
    showMessage("Registration successful! We'll contact you soon with more details.", "success")
    registrationForm.reset()
  })

  // Function to show messages
  function showMessage(message, type) {
    registrationMessage.textContent = message
    registrationMessage.className = `message ${type}`

    // Clear message after 5 seconds
    setTimeout(() => {
      registrationMessage.textContent = ""
      registrationMessage.className = "message"
    }, 5000)
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        })
      }
    })
  })
})

