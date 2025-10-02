import { Text, TouchableOpacity, View } from "react-native";

interface CategoryButtonProps {
  active?: boolean;
  title: string;
  onPress: () => void;
}

export default function CategoryButton({ active, title, onPress }: CategoryButtonProps) {
  if (active) {
    return (
      <TouchableOpacity
        onPress={onPress}
        className="flex-1 h-11 items-center justify-center bg-[#323B4F] rounded-[10px] relative shadow-inset-md"
      >
        <View className="items-center justify-center rounded-[10px]">
          <Text className="font-poppins-bold font-bold text-[15px] leading-[100%] tracking-[0.35px] text-[#3CA4EB]">
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 h-11 items-center justify-center bg-[#28303F] rounded-[10px] relative shadow-inset-sm"
    >
      <View className="items-center justify-center rounded-[10px]">
        <Text className="font-poppins text-[15px] leading-[100%] tracking-[0.35px] text-[#ffffff99]">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
