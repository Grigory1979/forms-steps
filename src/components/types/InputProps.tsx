import React from "react";
import { TrainingData } from "./TrainingData";

export type InputProps = {
  formData: TrainingData;
  setFormData: React.Dispatch<React.SetStateAction<TrainingData>>;
};