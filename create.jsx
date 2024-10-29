import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import { ResizeMode, Video } from 'expo-av';
import { icons } from '../../constants';
import CustomButton from '../../components/CustomButton';
// import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker'; // Import DropDownPicker
import CustomDropDownPicker from '../../components/CustomDropDownPicker';
import RulesComponent from '../../components/RulesComponent';
import { router } from 'expo-router';
import { createVideo } from '../../lib/appwrite';


const Create = () => {

  const [uploading, setUploading] = useState(false);
  
  // This is the object that holds the values for the Create Page form
  const [form, setForm] = useState({
  title: '',
  category: '',
  condition: '',
  location: '',
  video: null,
  thumbnail: null,
  prompt: ''
  })
  
  // console.log("Category", databaseCategoryVariable);
  
  // DropDownPicker state for categories
  
  // States for Category and Condition dropdowns
  const [openCategory, setOpenCategory] = useState(false); // open/setOpen
  const [category, setCategory] = useState(null);
  // DropDownPicker state for item Condition
  const [openCondition, setOpenCondition] = useState(false);
  const [condition, setCondition] = useState(null);
  // DropDownPicker state for item Location
  const [openLocation, setOpenLocation] = useState(false);
  const [location, setLocation] = useState(null);
  //----------------------------------------------------------------------------------------------------------------------
  // Upload Function using ImagePicker (ChatGPT) (handles both Video and Photos)
  const openPicker = async (selectType, index) => {
    let permissionResult;
    
    // Request media library permission
    if (selectType === 'image') {
      permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    } else if (selectType === 'video') {
      permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    }
  // -------------------------------------------------------
    if (permissionResult.granted === false) {
      Alert.alert("Permission required", "You've refused to allow access to your media!");
      return;
    }
  // -------------------------------------------------------
      // Picking images or videos
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: selectType === 'image' 
          ? ImagePicker.MediaTypeOptions.Images 
          : ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      // If user didn't cancel
      if (!result.canceled) {
        if (selectType === 'image') {
          setForm({ ...form, thumbnail: result.assets[0] }); //oldest code
     
      if (selectType === 'video') {
          setForm({ ...form, video: result.assets[0] });
        }
      } else {
         // What happens if they cancel.
        Alert.alert('Cancelled', 'No media was selected.');
      }
    }
  }; // end openPicker function
  
  
  
  // Submit Function
  const submit = async () => {
  // If the required fields aren't filled in then tell them CYC
  if (!form.prompt || !form.title || !form.category || !form.condition || !form.thumbnail) {
  return Alert.alert("Error", "Please fill in all required fields.");
  }
  setUploading(true);
  
  try {
    // Attempt to create the video
    await createVideo({...form, userId: user.$id });
  
    Alert.alert("Success", "Post uploaded successfully")
    router.push('/home')
  } catch (error) {
    Alert.alert("Error", error.message);
  } finally {
    setForm({
        title: '',
        category: '',
        condition: '',
        video: null,
        thumbnail: null,
        prompt: ''
    })
    setUploading(false);
  }
  } // end submit function
  
  // ----------------------------------------------------------------------------------------------------------------------
  // OPTIONS OBJECTS (CATEGORY || CONDITION || LOCATION)
  // ----------------------------------------------------------------------------------------------------------------------
  // Options for each dropdown
    const categoryOptions = [
  
      { label: 'Apartments', value: 'apartments' },
      { label: 'Arts & Crafts', value: 'art' },
      { label: 'Automobiles', value: 'automobiles' },
      { label: 'Baby Supplies', value: 'baby_supplies' },
      { label: 'Baked Goods (Cakes)', value: 'baked_goods' },
      { label: 'Bars', value: 'bars' },
      { label: 'Boats', value: 'boats' },    
      { label: 'Bookkeeping/Accounting Services', value: 'bookkeeping' },
      { label: 'Books', value: 'books' },
      { label: 'Businesses for Sale', value: 'businesses_sale' },
      { label: 'Car Supplies', value: 'car_supplies' },
      { label: 'Car Parts', value: 'car_parts' },
      { label: 'Christmas Decorations', value: 'christmas_decorations' },
      { label: 'Churches (and church events)', value: 'church' },
      { label: 'Cleaning Services', value: 'cleaning_services' },
      { label: 'Clothing (Adult)', value: 'clothing_adult' },
      { label: 'Clothing (Kids)', value: 'clothing_kids' },
      { label: 'Construction', value: 'construction' },
      { label: 'Commercial Offices', value: 'commercial_offices' },
      { label: 'Education/Tutoring', value: 'education' },
      { label: 'Electronics', value: 'electronics' },
      { label: 'Employees', value: 'employee' },
      { label: 'Farming Equipment', value: 'farming_equipment' },
      { label: 'Farming Services', value: 'farming_services' },
      { label: 'Festivals/Parties', value: 'festivals/parties' },
      { label: 'Fitness', value: 'fitness' },
      { label: 'Furniture', value: 'furniture' },
      { label: 'Food', value: 'food' },
      { label: 'Hair', value: 'hair' },
      { label: 'Hair Stylists/Services', value: 'hair_services' },
      { label: 'Hats', value: 'hats' },
      { label: 'Halloween Costumes', value: 'halloween_costumes' },
      { label: 'Health & Wellness', value: 'health' },
      { label: 'Home/Cleaning Supplies', value: 'home_supplies' },
      { label: 'Jewelry', value: 'jewelry' },
      { label: 'Jobs', value: 'jobs' },
      { label: 'Local Experiences (Tours)', value: 'local_experience' },
      { label: 'Luggage', value: 'luggage' },
      { label: 'Make-Up', value: 'make_up' },
      { label: 'Nail Products', value: 'nail_products' },
      { label: 'Nail Technicians', value: 'nail_tech' },
      { label: 'Other Services', value: 'other_services' },
      { label: 'Other Goods', value: 'other_goods' },
      { label: 'Packaging and Boxes', value: 'boxes' },
      { label: 'Paint', value: 'paint' },
      { label: 'Paint Services', value: 'paint_services' },
      { label: 'Parties', value: 'parties' },
      { label: 'Pets', value: 'pets' },
      { label: 'Pet Supplies', value: 'pet_supplies' },
      { label: 'Plants', value: 'plants' },
      { label: 'Properties for Rent', value: 'properties_rent' },
      { label: 'Properties for Sale (Real Estate)', value: 'properties_sale' },
      { label: 'School Supplies', value: 'supplies' },
      { label: 'Schools', value: 'schools' },
      { label: 'Shoes', value: 'shoes' },
      { label: 'Shops', value: 'shops' },
      { label: 'Sunglasses', value: 'sunglasses' },
      { label: 'Technology Services', value: 'tech_services' },
      { label: 'Toiletries (Fragrances, Soaps, Hair Supplies)', value: 'toiletries' },
      { label: 'Toys', value: 'toys' }
  
      // Add more categories as needed
      // { label: '', value: '' },
    ];
  
    const conditionOptions = [
      { label: 'New', value: 'new' },
      { label: 'Used (Lightly)', value: 'used' },
      { label: 'Used (Heavily)', value: 'used_heavy'},
      { label: 'Not an tangible object/Non-applicable', value: 'non-applicable'},
    ];
  
    const locationOptions = [
      { label: 'Abaco', value: 'abaco' },
      { label: 'Acklins', value: 'acklins' },
      { label: 'Andros', value: 'andros' },
      { label: 'Berry Islands', value: 'berry_islands' },
      { label: 'Bimini', value: 'bimini' },
      { label: 'Cat Island', value: 'cat_island' },
      { label: 'Crooked Island', value: 'crooked_island' },
      { label: 'Eleuthera', value: 'eleuthera' },
      { label: 'Exuma', value: 'exuma' },
      { label: 'Grand Bahama', value: 'grand_bahama' },
      { label: 'Long Island', value: 'long_island' },
      { label: 'Nassau / Paradise Island', value: 'nassau_paradise_island' },
      { label: 'Ragged Island', value: 'ragged_island' },
      { label: 'Rose Island', value: 'rose_island' },
      { label: 'Rum Cay', value: 'rum_cay' },
      { label: 'San Salvador', value: 'san_salvador' },
    ];
  // ----------------------------------------------------------------------------------------------------------------------
  // R E N D E R
  // -----------------------------------------------------------------------------------------------------------------------
    return (
      <SafeAreaView className = "bg-primary h-full">
        <ScrollView className="px-4 my-6 flex-1">
      
        <Text className="text-2xl text-white font-psemibold">
        Create a Post
        </Text>
  
        <RulesComponent />
  
        {/* Video Title Formfield */}
        <FormField       
        title="Video Title"
        isRequired = {true}
        value={form.title}
        placeholder="Give your video a catchy title..."
        handleChangeText={(e) => setForm({ ...form, 
          title: e })}
        otherStyles="mt-0"
        />
  
        {/* Price Formfield */}
        <FormField       
        title="Price"
        isRequired = {true}
        value={form.title}
        placeholder="How much does it cost?"
        handleChangeText={(e) => setForm({ ...form, 
          title: e })}
        otherStyles="mt-3"
        />
  
  
  {/* DropdownPickers */}
  {/* Category Dropdown */}
  <Text className="text-base text-gray-100 font-pmedium mt-3">Category <Text className="text-red-500">*</Text></Text>
  <CustomDropDownPicker
          items={categoryOptions}
          open={openCategory}
          value= {category}
  
          setOpen={setOpenCategory}
          setValue={setCategory}
  
          // onChangeValue={(databaseCategoryVariable) => console.log('Selected category:', databaseCategoryVariable)}
  
          // Placeholder and styles
          placeholder="Select a category"
          containerStyle={{ marginBottom: openCategory ? 150 : 30, marginTop: 8 }}
          
          searchable={true}  // Allows the dropdown to be searchable
          arrowIconStyle={{
            height: 24,  // Set the height of the arrow icon
            width: 24,   // Set the width of the arrow icon
            tintColor: '#aaa', // Change the color of the arrow icon
          }}
  /> 
  
    {/* Condition Dropdown */}
  <Text className="text-base text-gray-100 font-pmedium -mt-4">Condition<Text className="text-red-500">*</Text></Text>
  <CustomDropDownPicker        
            items={conditionOptions}
            open={openCondition}
            value={condition}
            
            setOpen={setOpenCondition}
            setValue={setCondition}
  
            onChangeValue={(value) => console.log('Selected condition:', value)}
            
            placeholder="Is it new or used?"
            containerStyle={{ marginBottom: openCondition ? 150 : 30, marginTop: 8 }}
            
            arrowIconStyle={{
              height: 24,  // Set the height of the arrow icon
              width: 24,   // Set the width of the arrow icon
              tintColor: '#aaa', // Change the color of the arrow icon
            }}
  /> 
  
   {/* Location Dropdown */}
  <Text className="text-base text-gray-100 font-pmedium -mt-4">Location<Text className="text-red-500">*</Text></Text>
  <CustomDropDownPicker        
            items={locationOptions}
            open={openLocation}
            value={location}
            
            setOpen={setOpenLocation}
            setValue={setLocation}
  
            onChangeValue={(value) => console.log('Selected location:', value)}
            
            placeholder="Where is the item located?"
            containerStyle={{ marginBottom: openCondition ? 150 : 30, marginTop: 8 }}
            
            arrowIconStyle={{
              height: 24,  // Set the height of the arrow icon
              width: 24,   // Set the width of the arrow icon
              tintColor: '#aaa', // Change the color of the arrow icon
            }}
  /> 
  
  
        {/* Upload Video Portion */}
        <View className="-mt-4 space-y-2">
        <Text className="text-base text-gray-100 font-pmedium">
        Upload Video (Optional)
        </Text>
    
  
        <TouchableOpacity onPress={() => openPicker('video')}>
          {form.video ?(
          <Video
          source={{ uri: form.video.uri}}
          className="w-full h-64 rounded-2xl"
          useNativeControls
          resizeMode={ResizeMode.COVER}
          isLooping
        />
  
        ) : (
          <View className="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center">
          <View className="w-14 h-14 border border-dashed border-secondary-100 justify-center items-center">
              <Image source={icons.upload}
              resizeMode='contain'
              className="w-1/2 h-1/2 "           
              />
          </View>
          </View>
        )} 
        </TouchableOpacity>
        </View>
  
  
  
        {/* Thumbnail Upload Portion - Old version */}
        <View className="mt-7 space-y-2">
        <Text className="text-base text-gray-100 font-pmedium">
        Thumbnail Image 
        <Text className="text-gray-100">  (2-4 Photos) <Text className="text-red-500">*</Text></Text>
        </Text>
        
        <TouchableOpacity onPress={() => openPicker('image')}>
          {form.thumbnail ?(
          <Image
          source={{ uri: form.thumbnail.uri}}
          className="w-full h-64 rounded-2xl"
          resizeMode="cover"
          />
        ) : (
          <View className="w-full h-16 px-4 bg-black-100 rounded-2xl justify-center 
          items-center border-2 border-black-200 flex-row space-x-2">
              <Image source={icons.upload}
              resizeMode='contain'
              className="w-5 h-5"
              />
              <Text className="text-sm text-gray-100 font-pmedium">
              Choose a file
              </Text>
          </View>
        )} 
        </TouchableOpacity> 



         

        </View>
  
  
  
  
    {/* Description */}
    <FormField       
        title="Product/Service Description"
        isRequired={true}
        value={form.prompt}
        placeholder="Describe what you are selling."
        handleChangeText={(e) => setForm({ ...form, 
          prompt: e })}
        otherStyles="mt-7"
        />
  
       
  
  {/* SUBMIT BUTTON */}
  <CustomButton 
    title="Submit & Publish"
    handlePress={submit}
    containerStyles="mt-7"
    isLoading={uploading}
  />
  
        </ScrollView>
      </SafeAreaView>
    )
  }

export default Create