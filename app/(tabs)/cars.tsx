import { FlatList, Image, SafeAreaView, StyleSheet } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const IMAGES = [
  {
    uri: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    uri: 'https://images.unsplash.com/photo-1549923748-8b3a6c876307?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    uri: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    uri: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    uri: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
]

export default function Cars() {
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
