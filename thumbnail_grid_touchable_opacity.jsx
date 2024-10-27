    {/* Thumbnail Upload Portion - Old version */}
        <View className="mt-7 space-y-2">
        <Text className="text-base text-gray-100 font-pmedium">
        Thumbnail Image 
        <Text className="text-gray-100">  (2-4 Photos) <Text className="text-red-500">*</Text></Text>
        </Text>
        
        {/* <TouchableOpacity onPress={() => openPicker('image')}>
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
        </TouchableOpacity> */}



              <View className="flex flex-wrap flex-row justify-center">
              <TouchableOpacity onPress={() => openPicker('image')}
                className="w-1/2 h-32 rounded-lg m-1"
              >
                {form.thumbnail && form.thumbnail[0] ? (
                  <Image
                    source={{ uri: form.thumbnail[0].uri }}
                    className="w-full h-full rounded-lg"
                    resizeMode="cover"
                  />
                ) : (
                  <View className="w-full h-full bg-black-100 rounded-lg justify-center items-center border-2 border-black-200">
                    <Image source={icons.upload} resizeMode="contain" className="w-5 h-5" />
                    <Text className="text-sm text-gray-100 font-pmedium">Choose a file</Text>
                  </View>
                )}
              </TouchableOpacity>


              <TouchableOpacity onPress={() => openPicker('image')}
                className="w-1/3 h-32 rounded-lg m-1"
              >
                {form.thumbnail && form.thumbnail[1] ? (
                  <Image
                    source={{ uri: form.thumbnail[1].uri }}
                    className="w-full h-full rounded-lg"
                    resizeMode="cover"
                  />
                ) : (
                  <View className="w-full h-full bg-black-100 rounded-lg justify-center items-center border-2 border-black-200">
                    <Image source={icons.upload} resizeMode="contain" className="w-5 h-5" />
                    <Text className="text-sm text-gray-100 font-pmedium">Choose a file</Text>
                  </View>
                )}
              </TouchableOpacity>


              <TouchableOpacity onPress={() => openPicker('image')}
                className="w-1/3 h-32 rounded-lg m-1"
              >
                {form.thumbnail && form.thumbnail[2] ? (
                  <Image
                    source={{ uri: form.thumbnail[2].uri }}
                    className="w-full h-full rounded-lg"
                    resizeMode="cover"
                  />
                ) : (
                  <View className="w-full h-full bg-black-100 rounded-lg justify-center items-center border-2 border-black-200">
                    <Image source={icons.upload} resizeMode="contain" className="w-5 h-5" />
                    <Text className="text-sm text-gray-100 font-pmedium">Choose a file</Text>
                  </View>
                )}
              </TouchableOpacity>


              <TouchableOpacity onPress={() => openPicker('image')}
                className="w-1/2 h-32 rounded-lg m-1"
              >
                {form.thumbnail && form.thumbnail[3] ? (
                  <Image
                    source={{ uri: form.thumbnail[3].uri }}
                    className="w-full h-full rounded-lg"
                    resizeMode="cover"
                  />
                ) : (
                  <View className="w-full h-full bg-black-100 rounded-lg justify-center items-center border-2 border-black-200">
                    <Image source={icons.upload} resizeMode="contain" className="w-5 h-5" />
                    <Text className="text-sm text-gray-100 font-pmedium">Choose a file</Text>
                  </View>
                )}
              </TouchableOpacity>

        </View>