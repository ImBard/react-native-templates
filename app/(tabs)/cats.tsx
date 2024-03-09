import { FlatList, Image, SafeAreaView, StyleSheet } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const IMAGES = [
  {
    uri: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    uri: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    uri: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    uri: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
]

export default function Cats() {
  const bottomTabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={[
          styles.listContainer,
          { paddingBottom: bottomTabBarHeight }
        ]}
        data={IMAGES}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.uri }}
            style={styles.img}
          />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,
    padding: 24,
    paddingVertical: 16,
    gap: 16,
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  }
});
