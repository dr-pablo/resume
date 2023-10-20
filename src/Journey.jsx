import {
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  HStack,
  StepIcon,
  Card,
  VStack,
} from "@chakra-ui/react";
import { steps } from "./steps";

function Journey() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper index={activeStep} orientation="vertical">
      {steps.map((step, index) => (
        <Step key={index}>
          <HStack>
            <StepIndicator boxSize={"lg"}>{step.icon}</StepIndicator>
            <StepTitle>{step.title}: </StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </HStack>
        </Step>
      ))}
    </Stepper>
  );
}

export default Journey;
