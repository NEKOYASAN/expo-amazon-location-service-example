import { MapView } from "@maplibre/maplibre-react-native";

if (!process.env.EXPO_PUBLIC_ALS_API_KEY) {
  throw new Error("EXPO_PUBLIC_ALS_API_KEY is not set");
}
if (!process.env.EXPO_PUBLIC_ALS_REGION) {
  throw new Error("EXPO_PUBLIC_ALS_REGION is not set");
}

const mapStyleUrl = `https://maps.geo.${process.env.EXPO_PUBLIC_ALS_REGION}.amazonaws.com/v2/styles/Standard/descriptor?key=${process.env.EXPO_PUBLIC_ALS_API_KEY}`

export default function Index() {
  return (
    <MapView style={{ flex: 1 }} mapStyle={mapStyleUrl} />
  );
}
