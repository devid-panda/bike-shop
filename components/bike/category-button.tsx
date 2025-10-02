import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CategoryButtonProps {
  active?: boolean;
  title: string;
  onPress: () => void;
}

export default function CategoryButton({ active, title, onPress }: CategoryButtonProps) {
  if (active) {
    return (
      <MaskedView
        className="flex-1 h-11"
        style={{ flex: 1, height: 44 }} // 48 = h-12
        maskElement={
          <Text
            className="text-white font-poppins-bold font-bold text-[15px] leading-[100%] tracking-[0.35px]"
            style={{
              flex: 1,
              textAlign: 'center',
              textAlignVertical: 'center',
              height: 44,
              lineHeight: 48,
              includeFontPadding: false,
            }}
          >
            {title}
          </Text>
        }
      >
        <LinearGradient
          colors={['#3CA4EB', '#4286EE']}
          style={{
            flex: 1,
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
          }}
        />
      </MaskedView>
    );
  }

  return (
    <TouchableOpacity
    onPress={onPress}
    className="flex-1 h-11 items-center justify-center bg-[#28303F] rounded-[10px] relative overflow-hidden"
    >
      <LinearGradient
        colors={['transparent', '#202633']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          StyleSheet.absoluteFillObject,
          { opacity: 0.7 },
        ]}
      />
      <LinearGradient
        colors={['#364055', 'transparent']}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={[
          StyleSheet.absoluteFillObject,
          { opacity: 0.7 },
        ]}
      />
      <View className="items-center justify-center rounded-[10px]">
        <Text className="font-poppins text-[15px] leading-[100%] tracking-[0.35px] text-[#ffffff99]">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
