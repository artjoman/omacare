import React, { Props, useRef, useState } from "react";
import { AgeGroup } from "../models/AgeGroup";
import { Gender } from "../models/Gender";
import OmaRequest from '../models/OmaRequest';
import { Service } from "../models/Service";
import RequestServices from "./RequestServices";

const servicesHeaderText = 'Select services';
const servicesSubHeader = 'MULTIPLE SELECT';
const ageGroupHeaderText= 'Select age';
const ageGroupSubHeader = 'SELECT ONE ITEM';
const genderHeaderText = 'Select gender';
const genderSubHeader = 'SELECT ONE ITEM';
const priceHeaderText = 'Price range';
const priceSubHeader = '';
const imagesHeaderText = 'Add images';
const imagesSubHeader = '';
const descriptionHeaderText = 'Add comments';
const descriptionSubHeader = '';
const summaryHeaderText = 'Summary';
const summarySubHeader = '';

type Field = 'Services' | 'Age' | 'Gender' | 'Price' | 'Images' | 'Description' | 'Summary';

export const RequestForm: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState(Array<Service>());
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedMinPrice, setSelectedMinPrice] = useState(20);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(50);
  const [description, setDecription] = useState('');
  const [currentField, setCurrentField] = useState('Services');
  const [headerText, setHeaderText] = useState(servicesHeaderText);
  const [subHeader, setSubHeader] = useState(servicesSubHeader);

  const servicesFieldRef = useRef<any>();

  const showField = (field: Field) => {
    setCurrentField(field)
  }

  const selectServices = () => {
      const checkedServices = servicesFieldRef.current.getCheckedServices(); 
      setSelectedServices(checkedServices);
      showField('Age');
    }
  }

  const selectAge = (age: AgeGroup) => {
    setSelectedAgeGroup(age);
    showField('Gender');
  }

  const selectGender = (gender: Gender) => {
    setSelectedGender(gender);
    showField('Price');
  }

  const selectPriceRange = (minPrice: number, maxPrice: number) => {
    setSelectedMinPrice(minPrice);
    setSelectedMaxPrice(maxPrice);
    showField('Images');
  }

  const proceedFromImages = () => {
    showField('Description');
  }

  const proceedFromDescription = () => {
    showField('Summary');
  }

  const navigateToCareReceiverHome = () => {

  }

  const submitRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let omaRequest;
    if ((
      selectedGender === 'Male' || 
      selectedGender === 'Female' || 
      selectedGender === 'Non-binary') && (
      selectedAgeGroup === 'Kid (0+)' ||
      selectedAgeGroup === 'Teenager (10+)' ||
      selectedAgeGroup === 'Adult (16+)' ||
      selectedAgeGroup === 'Pre-senior (55+)' ||
      selectedAgeGroup === 'Senior (65+)')) {
      let omaRequest: OmaRequest = {
        maxPrice: selectedMaxPrice,
        minPrice: selectedMinPrice,
        description,
        services: selectedServices,
        gender: selectedGender,
        ageGroup: selectedAgeGroup,
      }
    } else {
      console.error('Agegroup or gender cannot be undefined!');
    }
    // What happens then? Dispatch?
    console.log('OmaRequest is ', omaRequest);
  }

  const renderCurrentField = () => {
    switch (currentField) {
      case 'Services':
        return <RequestServices ref={servicesFieldRef} nextButtonHandler={selectServices} backButtonHandler={navigateToCareReceiverHome} headerText={servicesHeaderText} subHeader={servicesSubHeader} />;
    }
  }

  return (
    <>
      <form onSubmit={submitRequest}>
        {renderCurrentField()}
        <button type="submit">Submit</button>
      </form>  
    </>
  ) 
}

export default RequestForm;