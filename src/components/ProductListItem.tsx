import { Pressable, Text, Image, StyleSheet } from 'react-native';
import { Href, Link } from 'expo-router';
import Colors from '@/constants/Colors';
import { Product } from '@/types';

type ProductListItemProps = {
  product: Product;
};

const defaultImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type productDetailsLink = Href<`/menu/${number}`>;

export default function ProductListItem({ product }: ProductListItemProps) {
  return (
    <Link href={`/menu/${product.id}` as productDetailsLink} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image ?? defaultImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </Pressable>
    </Link>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    maxWidth: '50%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
});
