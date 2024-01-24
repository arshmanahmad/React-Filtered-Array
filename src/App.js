import React, { useState } from 'react'

const App = () => {


  const [experts, setExperts] = useState([
    {
      ExpertId: 1,
      ExpertName: "ishtiaq",
      UserId: 21,
      Valid: 0,
      PhoneNo: "03215000415",
      Experience: 0,
      Expertise: "",
      Email: "",
      Address: "",
      StartTime: null,
      EndTime: null
    },
    {
      ExpertId: 2,
      ExpertName: "ishtiaq",
      UserId: 22,
      Valid: 1,
      PhoneNo: "03215000415",
      Experience: 0,
      Expertise: "",
      Email: "",
      Address: "",
      StartTime: null,
      EndTime: null
    },
    {
      ExpertId: 3,
      ExpertName: "ishtiaq",
      UserId: 23,
      Valid: 1,
      PhoneNo: "03215000415",
      Experience: 10,
      Expertise: "expertise",
      Email: "aries@gmail.com",
      Address: "addresss",
      StartTime: null,
      EndTime: null
    },
    {
      ExpertId: 4,
      ExpertName: "ishtiaq",
      UserId: 36,
      Valid: 1,
      PhoneNo: "03005000415",
      Experience: 2,
      Expertise: "Medical Wakeel",
      Email: "aries@gmail.com",
      Address: "new address",
      StartTime: null,
      EndTime: null
    },
    {
      ExpertId: 5,
      ExpertName: "Test Expert",
      UserId: 56,
      Valid: 1,
      PhoneNo: "4234234",
      Experience: 5,
      Expertise: "Dev",
      Email: "tes@test.com",
      Address: "Mars",
      StartTime: null,
      EndTime: null
    },
    {
      ExpertId: 6,
      ExpertName: "test",
      UserId: 57,
      Valid: 1,
      PhoneNo: "4234234",
      Experience: 5,
      Expertise: "Dev",
      Email: "tes@test.com",
      Address: "Mars",
      StartTime: null,
      EndTime: null
    },
    {
      ExpertId: 7,
      ExpertName: "ishtiaq",
      UserId: 58,
      Valid: 0,
      PhoneNo: "03005000415",
      Experience: 2,
      Expertise: "Medical Wakeel",
      Email: "aries@gmail.com",
      Address: "new address",
      StartTime: null,
      EndTime: null
    },
    {
      ExpertId: 8,
      ExpertName: "test",
      UserId: 84,
      Valid: 1,
      PhoneNo: "4234234",
      Experience: 5,
      Expertise: "DEV",
      Email: "tes@test.com",
      Address: "MARS",
      StartTime: null,
      EndTime: null
    }
  ])
  const expertsInCase = [
    {
      CaseId: 5,
      ExpertId: 1,
      ExpertName: "ishtiaq",
      Experience: 0,
      Expertise: "",
      ClientId: 1,
      ClientName: "ishtiaqqqq",
      Speciality: "Heart",
      ClientExperience: 2,
      Type: "Doctor"
    },
    {
      CaseId: 5,
      ExpertId: 2,
      ExpertName: "ishtiaq",
      Experience: 0,
      Expertise: "",
      ClientId: 1,
      ClientName: "ishtiaqqqq",
      Speciality: "Heart",
      ClientExperience: 2,
      Type: "Doctor"
    },
  ]

  const handleFilter = (arr1, arr2) => {
    const filtered = arr1.filter((item) => {
      return !arr2.some((dataItem) => dataItem.ExpertId === item.ExpertId)
    })
    console.log(filtered)
  }
  return (
    <>
      <div>
        <h3>Check filtered array in CONSOLE</h3>
        <p>Based on ExpertId</p>
        {experts.map((item) => {
          return (
            <li>{item.ExpertId}</li>
          )
        })}
        <button onClick={() => handleFilter(experts, expertsInCase)}>Filter Experts</button>

      </div>
    </>
  )
}

export default App