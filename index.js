let Home_Score = 0
let Guest_Score = 0
let HomeEl = document.getElementById("home-score")
let GuestEl = document.getElementById("guest-score")

function home_plus_one() {
    Home_Score += 1
    HomeEl.textContent = Home_Score
}

function home_plus_two() {
    Home_Score += 2
    HomeEl.textContent = Home_Score
}

function home_plus_three() {
    Home_Score += 3
    HomeEl.textContent = Home_Score
}

function guest_plus_one() {
    Guest_Score += 1
    GuestEl.textContent = Guest_Score
}

function guest_plus_two() {
    Guest_Score += 2
    GuestEl.textContent = Guest_Score
}

function guest_plus_three() {
    Guest_Score += 3
    GuestEl.textContent = Guest_Score
}
