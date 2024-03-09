import { FlatList, Image, SafeAreaView, StyleSheet } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const IMAGES = [
  {
    uri: 'https://images.unsplash.com/photo-1603275218135-07c03485bba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    uri: 'https://plus.unsplash.com/premium_photo-1661886631971-5de41c164450?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    uri: 'https://images.unsplash.com/photo-1563296291-14f26f10c20f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    uri: 'https://images.unsplash.com/photo-1501771924607-209f42a6e7e4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    uri: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

export default function Boats() {
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
