# Covidify :page_with_curl:
Covidify is a web-based application which prints the receipt on reported Covid-19 related information. 
Users can choose specific dates or print out the average daily, month, or yearly data.
Covidify uses the OpenCovid.ca API for Covid-19 statistics, to learn more about the API visit (https://opencovid.ca/api/)

Some features Covidify is expected to offer include:
- Daily, Monthly, and Yearly receipts
- Receipts given a user specified date
- Receipts given a user specified date range
- Tips on how to reduce the spread of Covid-19
- Downloading Receipts
- Receipt history

## Welcome page
![WElcomne](https://user-images.githubusercontent.com/102015496/220824985-f81533f9-3774-45d3-b4be-0a483512fa90.jpg)

## Main page
![Main](https://user-images.githubusercontent.com/102015496/220528917-45595104-b070-4b62-8d2a-6e87bd21c751.jpg)

## Monthly Receipt
![Receipt2](https://user-images.githubusercontent.com/102015496/220529034-5359a51a-9cca-43a4-b519-2f3e2f15c0dd.jpg)
- NOTE: Daily, Monthly, Yearly, & current date is region locked to Ontario only where the reference date is March 13, 2020

## toDo
- [x] Daily, Monthly, & Yearly Receipts
- [x] Custom Receipts both specific & range
- [x] Receipt History
- [ ] PNG receipt download
- [ ] Introduction Page && Loading animation for data fetching (Covid-19 tips)

## Dependencies
```
"dependencies": {
  "@fortawesome/fontawesome-svg-core": "^6.3.0",
  "@fortawesome/free-solid-svg-icons": "^6.3.0",
  "@fortawesome/react-fontawesome": "^0.2.0",
  "antd": "^5.2.2",
  "axios": "^1.3.3",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.1"
}
```
