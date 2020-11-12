import React, { ChangeEvent, useState } from "react";
import { AgeGroup } from "../models/AgeGroup";
import { Gender } from "../models/Gender";
import OmaRequest from '../models/OmaRequest';
import { Service } from "../models/Service";
import RequestFormHeader from "./RequestFormHeader";
import MainButton from "./MainButton";
import CheckboxCard from "./checkbox";
import ChipLabel from "./ChipLabel";
import { useHistory } from "react-router-dom";

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

const ageGroups: AgeGroup[] = ['Kid (0+)', 'Teenager (10+)', 'Adult (16+)', 'Pre-senior (55+)', 'Senior (65+)'];

const genders: Gender[] = ['Male', 'Female', 'Non-binary']

type Field = 'Services' | 'Age' | 'Gender' | 'Price' | 'Images' | 'Description' | 'Summary';

const RequestForm: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState(Array<Service>());
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedMinPrice, setSelectedMinPrice] = useState(20);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(50);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [currentField, setCurrentField] = useState('Services');
  const [nannyChecked, setNannyChecked] = useState(false);
  const [preparingMealsChecked, setPreparingMealsChecked] = useState(false);
  const [sitterForElderlyChecked, setSitterForElderlyChecked] = useState(false);
  const [houseworkChecked, setHouseworkChecked] = useState(false);
  const [groceryshoppingChecked, setGroceryshoppingChecked] = useState(false);
  const [adminTasksChecked, setAdminTasksChecked] = useState(false);

  const history = useHistory();

  const isServicesNotEmpty = () => {
    return (
         nannyChecked 
      || preparingMealsChecked
      || sitterForElderlyChecked
      || houseworkChecked
      || groceryshoppingChecked
      || adminTasksChecked
    );
  }

  const isPriceRangeButtonEnabled = () => {
    return (selectedMinPrice > 0 && selectedMinPrice <= selectedMaxPrice && selectedMaxPrice <= 500);
  }

  const showField = (field: Field) => {
    setCurrentField(field)
  }

  const selectServices = () => {
      showField('Age');
  }

  const selectAge = () => {
    showField('Gender');
  }

  const selectGender = (gender: Gender) => {
    setSelectedGender(gender);
    showField('Price');
  }

  const selectPriceRange = () => {
    if (selectedMinPrice > 0 && selectedMinPrice <= selectedMaxPrice && selectedMaxPrice <= 500) {
      showField('Images');
    }
  }

  const proceedFromImages = () => {
    showField('Description');
  }

  const proceedFromDescription = () => {
    showField('Summary');
  }

  const navigateToCareReceiverHome = () => {
    history.push('/receive');
  }

  const submitRequest = () => {
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
        title,
        image
      }
    } else {
      console.error('Agegroup or gender cannot be undefined!');
    }
    history.push('/receive');
  }

  const handleMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedMinPrice(parseInt(event.currentTarget.value));
  }

  const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedMaxPrice(parseInt(event.currentTarget.value));
  }

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.currentTarget.value);
  }

  const renderCurrentField = () => {
    switch (currentField) {
      case 'Services':
        // 'Nanny' | 'Preparing meals' | 'Sitter for elderly people' | 'Light housework' | 'Grocery shopping' | 'Administrative tasks';
        return (
          <>
            <RequestFormHeader backButtonHandler={navigateToCareReceiverHome} headerText={servicesHeaderText} subHeader={servicesSubHeader} />
            <div className="checkBoxContainer">
              <CheckboxCard checkboxName="nanny" checkboxValue={nannyChecked} labelText={'Nanny'} clickHandler={() => setNannyChecked(!nannyChecked)}/>
              <CheckboxCard checkboxName="preparingMeals" checkboxValue={preparingMealsChecked} labelText={'Preparing Meals'} clickHandler={() => setPreparingMealsChecked(!preparingMealsChecked)}/>
              <CheckboxCard checkboxName="sitter" checkboxValue={sitterForElderlyChecked} labelText={'Sitter for Elderly People'} clickHandler={() => setSitterForElderlyChecked(!sitterForElderlyChecked)}/>
              <CheckboxCard checkboxName="housework" checkboxValue={houseworkChecked} labelText={'Light Housework'} clickHandler={() => setHouseworkChecked(!houseworkChecked)}/>
              <CheckboxCard checkboxName="groceryShopping" checkboxValue={groceryshoppingChecked} labelText={'Grocery Shopping'} clickHandler={() => setGroceryshoppingChecked(!groceryshoppingChecked)}/>
              <CheckboxCard checkboxName="adminTasks" checkboxValue={adminTasksChecked} labelText={'Administrative Tasks'} clickHandler={() => setAdminTasksChecked(!adminTasksChecked)}/>
              <div className="requestFormNextButtonContainerServices">
                <MainButton labelText="Next" clickHandler={selectServices} buttonEnabled={(isServicesNotEmpty())} />
              </div>
            </div>
          </>
        );
      case 'Age':
        return (
          <>
            <RequestFormHeader backButtonHandler={() => showField('Services')} headerText={ageGroupHeaderText} subHeader={ageGroupSubHeader} />
            <div className="requestFormChipsContainer">
              {ageGroups.map(ageGroup => <ChipLabel labelText={ageGroup} key={ageGroup} clickHandler={() => setSelectedAgeGroup(ageGroup)} chipSelected={selectedAgeGroup === ageGroup} />)}
            </div>
            <div className="requestFormNextButtonContainerAge">
                <MainButton labelText="Next" clickHandler={selectAge} buttonEnabled={(selectedAgeGroup.length > 0)} />
            </div>
          </> 
        )
      case 'Gender':
        return (
          <>
            <RequestFormHeader backButtonHandler={() => showField('Age')} headerText={genderHeaderText} subHeader={genderSubHeader} />
            <div className="requestFormChipsContainer">
              {genders.map(gender => <ChipLabel labelText={gender} key={gender} clickHandler={() => selectGender(gender)} chipSelected={false} />)}
            </div>
          </>
        )
      case 'Price':
        return (
          <>
            <RequestFormHeader backButtonHandler={() => showField('Gender')} headerText={priceHeaderText} subHeader={priceSubHeader} />
            <div className="priceDiv"><p>€{selectedMinPrice} - €{selectedMaxPrice}</p></div>
            <input type="number" value={selectedMinPrice} onChange={handleMinPriceChange} />
            <input type="number" value={selectedMaxPrice} onChange={handleMaxPriceChange} />
            <MainButton labelText="Next" clickHandler={selectPriceRange} buttonEnabled={isPriceRangeButtonEnabled()} />

          </>
        )
      case 'Images':
        return (
          <>
            <RequestFormHeader backButtonHandler={() => showField('Price')} headerText={imagesHeaderText} subHeader={imagesSubHeader} />
            <div className="imageUploadPlaceholder">Image upload to be added</div>
            <MainButton labelText="Next" clickHandler={proceedFromImages} buttonEnabled={true} />
          </>
        )
      case 'Description':
        return (
          <>
            <RequestFormHeader backButtonHandler={() => showField('Images')} headerText={descriptionHeaderText} subHeader={descriptionSubHeader} />
            <div className="requestFormTextAreaContainer">
              <textarea className="requestFormTextArea" value={description} onChange={handleDescriptionChange} />
            </div>
            <MainButton labelText="Next" clickHandler={proceedFromDescription} buttonEnabled={true} />
          </>
        )
      case 'Summary':
        return (
          <>
            <RequestFormHeader backButtonHandler={() => showField('Description')} headerText={summaryHeaderText} subHeader={summarySubHeader} />
            <MainButton labelText="Next" clickHandler={submitRequest} buttonEnabled={true} />
          </>
        )
    }
  }

  return (
    <>
      {renderCurrentField()}
    </>
  ) 
}

export default RequestForm;
