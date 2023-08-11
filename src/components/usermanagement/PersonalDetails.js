import { Select, Tag } from "antd";
import React, { useEffect, useState } from "react";
import square from '../../assets/square-plus.png'

const countryList = [
    {label: "Albania", value: "AL"},
    {label: "Åland Islands", value: "AX"},
    {label: "Algeria", value: "DZ"},
    {label: "American Samoa", value: "AS"},
    {label: "Andorra", value: "AD"},
    {label: "Angola", value: "AO"},
    {label: "Anguilla", value: "AI"},
    {label: "Antarctica", value: "AQ"},
    {label: "Antigua and Barbuda", value: "AG"},
    {label: "Argentina", value: "AR"},
    {label: "Armenia", value: "AM"},
    {label: "Aruba", value: "AW"},
    {label: "Australia", value: "AU"},
    {label: "Austria", value: "AT"},
    {label: "Azerbaijan", value: "AZ"},
    {label: "Bahamas (the)", value: "BS"},
    {label: "Bahrain", value: "BH"},
    {label: "Bangladesh", value: "BD"},
    {label: "Barbados", value: "BB"},
    {label: "Belarus", value: "BY"},
    {label: "Belgium", value: "BE"},
    {label: "Belize", value: "BZ"},
    {label: "Benin", value: "BJ"},
    {label: "Bermuda", value: "BM"},
    {label: "Bhutan", value: "BT"},
    {label: "Bolivia (Plurinational State of)", value: "BO"},
    {label: "Bonaire, Sint Eustatius and Saba", value: "BQ"},
    {label: "Bosnia and Herzegovina", value: "BA"},
    {label: "Botswana", value: "BW"},
    {label: "Bouvet Island", value: "BV"},
    {label: "Brazil", value: "BR"},
    {label: "British Indian Ocean Territory (the)", value: "IO"},
    {label: "Brunei Darussalam", value: "BN"},
    {label: "Bulgaria", value: "BG"},
    {label: "Burkina Faso", value: "BF"},
    {label: "Burundi", value: "BI"},
    {label: "Cabo Verde", value: "CV"},
    {label: "Cambodia", value: "KH"},
    {label: "Cameroon", value: "CM"},
    {label: "Canada", value: "CA"},
    {label: "Cayman Islands (the)", value: "KY"},
    {label: "Central African Republic (the)", value: "CF"},
    {label: "Chad", value: "TD"},
    {label: "Chile", value: "CL"},
    {label: "China", value: "CN"},
    {label: "Christmas Island", value: "CX"},
    {label: "Cocos (Keeling) Islands (the)", value: "CC"},
    {label: "Colombia", value: "CO"},
    {label: "Comoros (the)", value: "KM"},
    {label: "Congo (the Democratic Republic of the)", value: "CD"},
    {label: "Congo (the)", value: "CG"},
    {label: "Cook Islands (the)", value: "CK"},
    {label: "Costa Rica", value: "CR"},
    {label: "Croatia", value: "HR"},
    {label: "Cuba", value: "CU"},
    {label: "Curaçao", value: "CW"},
    {label: "Cyprus", value: "CY"},
    {label: "Czechia", value: "CZ"},
    {label: "Côte d'Ivoire", value: "CI"},
    {label: "Denmark", value: "DK"},
    {label: "Djibouti", value: "DJ"},
    {label: "Dominica", value: "DM"},
    {label: "Dominican Republic (the)", value: "DO"},
    {label: "Ecuador", value: "EC"},
    {label: "Egypt", value: "EG"},
    {label: "El Salvador", value: "SV"},
    {label: "Equatorial Guinea", value: "GQ"},
    {label: "Eritrea", value: "ER"},
    {label: "Estonia", value: "EE"},
    {label: "Eswatini", value: "SZ"},
    {label: "Ethiopia", value: "ET"},
    {label: "Falkland Islands (the) [Malvinas]", value: "FK"},
    {label: "Faroe Islands (the)", value: "FO"},
    {label: "Fiji", value: "FJ"},
    {label: "Finland", value: "FI"},
    {label: "France", value: "FR"},
    {label: "French Guiana", value: "GF"},
    {label: "French Polynesia", value: "PF"},
    {label: "French Southern Territories (the)", value: "TF"},
    {label: "Gabon", value: "GA"},
    {label: "Gambia (the)", value: "GM"},
    {label: "Georgia", value: "GE"},
    {label: "Germany", value: "DE"},
    {label: "Ghana", value: "GH"},
    {label: "Gibraltar", value: "GI"},
    {label: "Greece", value: "GR"},
    {label: "Greenland", value: "GL"},
    {label: "Grenada", value: "GD"},
    {label: "Guadeloupe", value: "GP"},
    {label: "Guam", value: "GU"},
    {label: "Guatemala", value: "GT"},
    {label: "Guernsey", value: "GG"},
    {label: "Guinea", value: "GN"},
    {label: "Guinea-Bissau", value: "GW"},
    {label: "Guyana", value: "GY"},
    {label: "Haiti", value: "HT"},
    {label: "Heard Island and McDonald Islands", value: "HM"},
    {label: "Holy See (the)", value: "VA"},
    {label: "Honduras", value: "HN"},
    {label: "Hong Kong", value: "HK"},
    {label: "Hungary", value: "HU"},
    {label: "Iceland", value: "IS"},
    {label: "India", value: "IN"},
    {label: "Indonesia", value: "ID"},
    {label: "Iran (Islamic Republic of)", value: "IR"},
    {label: "Iraq", value: "IQ"},
    {label: "Ireland", value: "IE"},
    {label: "Isle of Man", value: "IM"},
    {label: "Israel", value: "IL"},
    {label: "Italy", value: "IT"},
    {label: "Jamaica", value: "JM"},
    {label: "Japan", value: "JP"},
    {label: "Jersey", value: "JE"},
    {label: "Jordan", value: "JO"},
    {label: "Kazakhstan", value: "KZ"},
    {label: "Kenya", value: "KE"},
    {label: "Kiribati", value: "KI"},
    {label: "Korea (the Democratic People's Republic of)", value: "KP"},
    {label: "Korea (the Republic of)", value: "KR"},
    {label: "Kuwait", value: "KW"},
    {label: "Kyrgyzstan", value: "KG"},
    {label: "Lao People's Democratic Republic (the)", value: "LA"},
    {label: "Latvia", value: "LV"},
    {label: "Lebanon", value: "LB"},
    {label: "Lesotho", value: "LS"},
    {label: "Liberia", value: "LR"},
    {label: "Libya", value: "LY"},
    {label: "Liechtenstein", value: "LI"},
    {label: "Lithuania", value: "LT"},
    {label: "Luxembourg", value: "LU"},
    {label: "Macao", value: "MO"},
    {label: "Madagascar", value: "MG"},
    {label: "Malawi", value: "MW"},
    {label: "Malaysia", value: "MY"},
    {label: "Maldives", value: "MV"},
    {label: "Mali", value: "ML"},
    {label: "Malta", value: "MT"},
    {label: "Marshall Islands (the)", value: "MH"},
    {label: "Martinique", value: "MQ"},
    {label: "Mauritania", value: "MR"},
    {label: "Mauritius", value: "MU"},
    {label: "Mayotte", value: "YT"},
    {label: "Mexico", value: "MX"},
    {label: "Micronesia (Federated States of)", value: "FM"},
    {label: "Moldova (the Republic of)", value: "MD"},
    {label: "Monaco", value: "MC"},
    {label: "Mongolia", value: "MN"},
    {label: "Montenegro", value: "ME"},
    {label: "Montserrat", value: "MS"},
    {label: "Morocco", value: "MA"},
    {label: "Mozambique", value: "MZ"},
    {label: "Myanmar", value: "MM"},
    {label: "Namibia", value: "NA"},
    {label: "Nauru", value: "NR"},
    {label: "Nepal", value: "NP"},
    {label: "Netherlands (the)", value: "NL"},
    {label: "New Caledonia", value: "NC"},
    {label: "New Zealand", value: "NZ"},
    {label: "Nicaragua", value: "NI"},
    {label: "Niger (the)", value: "NE"},
    {label: "Nigeria", value: "NG"},
    {label: "Niue", value: "NU"},
    {label: "Norfolk Island", value: "NF"},
    {label: "Northern Mariana Islands (the)", value: "MP"},
    {label: "Norway", value: "NO"},
    {label: "Oman", value: "OM"},
    {label: "Pakistan", value: "PK"},
    {label: "Palau", value: "PW"},
    {label: "Palestine, State of", value: "PS"},
    {label: "Panama", value: "PA"},
    {label: "Papua New Guinea", value: "PG"},
    {label: "Paraguay", value: "PY"},
    {label: "Peru", value: "PE"},
    {label: "Philippines (the)", value: "PH"},
    {label: "Pitcairn", value: "PN"},
    {label: "Poland", value: "PL"},
    {label: "Portugal", value: "PT"},
    {label: "Puerto Rico", value: "PR"},
    {label: "Qatar", value: "QA"},
    {label: "Republic of North Macedonia", value: "MK"},
    {label: "Romania", value: "RO"},
    {label: "Russian Federation (the)", value: "RU"},
    {label: "Rwanda", value: "RW"},
    {label: "Réunion", value: "RE"},
    {label: "Saint Barthélemy", value: "BL"},
    {label: "Saint Helena, Ascension and Tristan da Cunha", value: "SH"},
    {label: "Saint Kitts and Nevis", value: "KN"},
    {label: "Saint Lucia", value: "LC"},
    {label: "Saint Martin (French part)", value: "MF"},
    {label: "Saint Pierre and Miquelon", value: "PM"},
    {label: "Saint Vincent and the Grenadines", value: "VC"},
    {label: "Samoa", value: "WS"},
    {label: "San Marino", value: "SM"},
    {label: "Sao Tome and Principe", value: "ST"},
    {label: "Saudi Arabia", value: "SA"},
    {label: "Senegal", value: "SN"},
    {label: "Serbia", value: "RS"},
    {label: "Seychelles", value: "SC"},
    {label: "Sierra Leone", value: "SL"},
    {label: "Singapore", value: "SG"},
    {label: "Sint Maarten (Dutch part)", value: "SX"},
    {label: "Slovakia", value: "SK"},
    {label: "Slovenia", value: "SI"},
    {label: "Solomon Islands", value: "SB"},
    {label: "Somalia", value: "SO"},
    {label: "South Africa", value: "ZA"},
    {label: "South Georgia and the South Sandwich Islands", value: "GS"},
    {label: "South Sudan", value: "SS"},
    {label: "Spain", value: "ES"},
    {label: "Sri Lanka", value: "LK"},
    {label: "Sudan (the)", value: "SD"},
    {label: "Surivalue", value: "SR"},
    {label: "Svalbard and Jan Mayen", value: "SJ"},
    {label: "Sweden", value: "SE"},
    {label: "Switzerland", value: "CH"},
    {label: "Syrian Arab Republic", value: "SY"},
    {label: "Taiwan (Province of China)", value: "TW"},
    {label: "Tajikistan", value: "TJ"},
    {label: "Tanzania, United Republic of", value: "TZ"},
    {label: "Thailand", value: "TH"},
    {label: "Timor-Leste", value: "TL"},
    {label: "Togo", value: "TG"},
    {label: "Tokelau", value: "TK"},
    {label: "Tonga", value: "TO"},
    {label: "Trinidad and Tobago", value: "TT"},
    {label: "Tunisia", value: "TN"},
    {label: "Turkey", value: "TR"},
    {label: "Turkmenistan", value: "TM"},
    {label: "Turks and Caicos Islands (the)", value: "TC"},
    {label: "Tuvalu", value: "TV"},
    {label: "Uganda", value: "UG"},
    {label: "Ukraine", value: "UA"},
    {label: "United Arab Emirates (the)", value: "AE"},
    {label: "United Kingdom of Great Britain and Northern Ireland (the)", value: "GB"},
    {label: "United States Minor Outlying Islands (the)", value: "UM"},
    {label: "United States of America (the)", value: "US"},
    {label: "Uruguay", value: "UY"},
    {label: "Uzbekistan", value: "UZ"},
    {label: "Vanuatu", value: "VU"},
    {label: "Venezuela (Bolivarian Republic of)", value: "VE"},
    {label: "Viet Nam", value: "VN"},
    {label: "Virgin Islands (British)", value: "VG"},
    {label: "Virgin Islands (U.S.)", value: "VI"},
    {label: "Wallis and Futuna", value: "WF"},
    {label: "Western Sahara", value: "EH"},
    {label: "Yemen", value: "YE"},
    {label: "Zambia", value: "ZM"},
    {label: "Zimbabwe", value: "ZW"}
  ]
  

const PersonalDetails = ({edit, setEdit, setEditActive, dataSource, setDataSource}) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [country, setCountry] = useState('India')
  const [stage, setStage] = useState("")
  const [key, setKey] = useState(-1)
  
  


  useEffect(()=> {
    setKey(localStorage.getItem('key'))
   
      setEmail(dataSource[key]?.email)
      setName(dataSource[key]?.name)
      setMobile(dataSource[key]?.mobile)
      setStage(dataSource[key]?.stage)
      setCountry(dataSource[key]?.country)
      console.log({email, name, stage, country})
    
  },[key])

    const [tags, setTags] = useState(['Villa', '4BHK'])
    const [tagValue, setTagValue] = useState('')

    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      const onSearch = (value) => {
        console.log('search:', value);
      };


      const preventDefault = (e,i) => {
        e.preventDefault()
        if (i >= 0 && i < tags.length) {
            const newArray = tags.slice(); // Create a copy of the original array
            newArray.splice(i, 1); // Remove 1 element at the specified index
            setTags(newArray); // Update the state with the new array
          }
      };

      useEffect(()=> {

      },[tags])

  return (
    
    <div className="px-6 grid gap-5">
      <div className="flex justify-between mt-3">
        <p className="text-[18px] font-[500] font-poppins leading-[27px]">
          Your personal details
        </p>
        {
          edit ? <button className="w-[205px] h-[48px] text-[#4B4B4B] border-[1px] border-[#4B4B4B] rounded-[8px] text-[17px] font-publicsans font-[500] outline-none hover:opacity-90" onClick={()=>{setEdit(false); setEditActive(false)}}>Save</button> : <button onClick={()=>setEdit(true)} className="underline"> Edit</button>
        }
        
      </div>

      <div className="grid grid-cols-2 w-[80%] gap-x-20  gap-10 font-opensans">
        <div className="flex flex-col w-full gap-[6px]">
          <label
            className="font-[400] text-[14px] leading-[20px] text-[#002550]"
            for="name"
          >
            Full Name
          </label>
          <input
          value={name}
            type="text"
            className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
            placeholder="Enter Moblie Number"
            id="name"
          />
        </div>

        <div className="flex flex-col w-full gap-[6px]">
          <label
            className="font-[400] text-[14px] leading-[20px] text-[#002550]"
            for="email"
            
          >
            Email
          </label>
          <input
          value={email}
            type="text"
            className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
            placeholder="Enter Email"
            id="email"
          />
        </div>

        <div className="flex flex-col w-full gap-[6px]">
          <label
            className="font-[400] text-[14px] leading-[20px] text-[#002550]"
            for="mobile"
          
          >
            Mobile
          </label>
          <input
          value={mobile}
            type="text"
            className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
            placeholder="Enter Moblie Number"
            id="mobile"
          />
        </div>

        <div className="flex flex-col w-full gap-[6px]">
          <label
            className="font-[400] text-[14px] leading-[20px] text-[#002550]"
            for="name"
          >
            Country
          </label>
          

          <select  className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent" defaultValue={country}>
            {
              countryList.map((item) => (
                <option key={item.value}>{item.label}</option>
              ))
            }
          </select>
        </div>

        <div className="flex flex-col w-full gap-[6px]">
          <label
            className="font-[400] text-[14px] leading-[20px] text-[#002550]"
            for="stage"
          >
            Stage
          </label>
          <input
          value={stage}
            type="text"
            className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[44px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
            placeholder="Stage"
            id="stage"
          />
        </div>

        <div className="flex flex-col w-full gap-[6px]">
          <label
            className="font-[400] text-[14px] leading-[20px] text-[#002550]"
            for="property"
          >
            Property Type
          </label>
          <div className="w-full relative">
          <input
            type="text"
            className="w-full border-[1px] border-[#1A1A1A] outline-none  rounded-[8px] h-[38px] px-2 placeholder:text-[#1a1a1a] placeholder:font-[400] placeholder:opacity-20 border-opacity-20 bg-transparent"
            placeholder="Property type"
            id="property"
            value={tagValue}
            onChange={(e)=> setTagValue(e.target.value)}
          />
          <img src={square} alt="square" className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer" onClick={()=> {setTags(prev => [...prev, tagValue]); setTagValue('')}}/>
          </div>
          <div className="flex flex-wrap gap-y-[6px]">
          {
            tags.map((tag, i) => (
                <Tag closeIcon onClose={(e) => preventDefault(e,i)} color="#E8E8E8">
      {tag}
    </Tag>
            ))
          }
    </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
