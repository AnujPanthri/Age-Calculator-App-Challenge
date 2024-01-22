# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted


### Links

- Solution URL: [https://github.com/AnujPanthri/Age-Calculator-App-Challenge](https://github.com/AnujPanthri/Age-Calculator-App-Challenge)
- Live Site URL: [https://anujpanthri.github.io/Age-Calculator-App-Challenge/](https://anujpanthri.github.io/Age-Calculator-App-Challenge/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Grid
- Validation in JS
- Using CLAMP,MINMAX function in CSS
- Using vw unit with MIN function for padding for responsiveness
- Caret Color css property
- importing font from different ttf files


### What I learned

This was a tricky one definitely . And I feel there is ambiguity about the right solution for this one . For my approach if date subraction is not possible i just make the current date's representation in last year , and in last month.

Example 21-01-2024 can be represented to 52-12-2023 (day=31(December)+21) .

### Useful resources

- [Collegevidya age-calculator](https://collegevidya.com/tool/age-calculator/) - For getting idea about how to calculate exact age . I just used this to get the ideas their logic doesn't takes care of every month it just considers every month to be 30 days.

## Author

- Github - [@AnujPanthri](https://www.github.com/AnujPanthri)
- Frontend Mentor - [@AnujPanthri](https://www.frontendmentor.io/profile/AnujPanthri)