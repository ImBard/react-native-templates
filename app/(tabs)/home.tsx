import { FlatList, Image, SafeAreaView, StyleSheet } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const IMAGES = [
  {
    uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    uri: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    uri: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  }
]

export default function Home() {
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
