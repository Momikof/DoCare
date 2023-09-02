import { useMemo } from "react";
import { Dimensions } from "react-native";

export const useScreenSize = () => useMemo(() => Dimensions.get("window"), []);
