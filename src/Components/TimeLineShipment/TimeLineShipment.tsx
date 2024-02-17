import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  StepConnectorProps,
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import {
  Inventory,
  LocalShipping,
  PublishedWithChanges,
  TaskAlt,
} from "@mui/icons-material";
import { shipmentStatusHandler } from "../../helpers/Functions";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { IShipment } from "../../interfaces";
import { langSelector } from "../../RTK/features/LangSlice/LangSlice";

// line options
interface ColorlibConnectorProps extends StepConnectorProps {
  colorstatus: string | undefined;
}

//   ({ colorstatus = "orange" }) => ({
//     [`&.${stepConnectorClasses.alternativeLabel}`]: {
//       top: 22,
//     },
//     [`&.${stepConnectorClasses.active}`]: {
//       [`& .${stepConnectorClasses.line}`]: {
//         backgroundColor: colorstatus,
//       },
//     },
//     [`&.${stepConnectorClasses.completed}`]: {
//       [`& .${stepConnectorClasses.line}`]: {
//         backgroundColor: colorstatus,
//       },
//     },
//     [`& .${stepConnectorClasses.line}`]: {
//       height: 8,
//       border: 0,
//       backgroundColor: "#eaeaf0",
//       borderRadius: 1,
//     },
//   })
// );

const ColorlibConnector = styled(StepConnector)<ColorlibConnectorProps>(
  ({ colorstatus = "orange" }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    if (!isSmallScreen) {
      // Styles for horizontal layout on small screens
      return {
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
          top: 22,
        },
        [`&.${stepConnectorClasses.active}`]: {
          [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: colorstatus,
          },
        },
        [`&.${stepConnectorClasses.completed}`]: {
          [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: colorstatus,
          },
        },
        [`& .${stepConnectorClasses.line}`]: {
          height: 8,
          border: 0,
          backgroundColor: "#eaeaf0",
          borderRadius: 1,
        },
      };
    } else {
      // Styles for vertical layout on large screens
      return {
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
          left: 43,
        },
        [`&.${stepConnectorClasses.active}`]: {
          [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: colorstatus,
          },
        },
        [`&.${stepConnectorClasses.completed}`]: {
          [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: colorstatus,
          },
        },
        [`& .${stepConnectorClasses.line}`]: {
          width: 8,

          top: 100,
          border: 0,
          backgroundColor: "#eaeaf0",
          borderRadius: 1,
        },
      };
    }
  }
);
interface ColorlibStepIconRootProps extends StepIconProps {
  ownerState: {
    completed?: boolean;
    active?: boolean;
  };
  colorstatus: string | undefined;
}

const ColorlibStepIconRoot = styled("div")<ColorlibStepIconRootProps>(
  ({ ownerState, colorstatus = "orange" }) => ({
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundColor: colorstatus,
      width: 50,
      height: 50,
    }),
    ...(ownerState.completed && {
      backgroundColor: colorstatus,
      width: 20,
      height: 20,
      marginTop: 15,
    }),
  })
);

interface IPropsStepIcon {
  shipmentStatus: {
    state: string;
    timestamp: string;
  };
}
function ColorlibStepIcon({
  shipmentStatus,
  ...props
}: StepIconProps & IPropsStepIcon) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <Inventory />,
    2: <PublishedWithChanges />,
    3: <LocalShipping />,
    4: <TaskAlt />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
      colorstatus={shipmentStatusHandler(shipmentStatus.state)?.color}
      icon={undefined}
    >
      {completed ? (
        <Check
          className="QontoStepIcon-completedIcon"
          sx={{ width: "15px", height: "15px" }}
        />
      ) : (
        icons[String(props.icon)]
      )}
    </ColorlibStepIconRoot>
  );
}

interface IProps {
  shipment: IShipment;
}
export default function TimeLineShipment({ shipment }: IProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { lang } = useSelector(langSelector);
  const { t } = useTranslation("shipment");

  // React.useEffect(() => {
  //   console.log(shipment.CurrentStatus.state);
  //   if (shipment.CurrentStatus.state === "TICKET_CREATED") {
  //     console.log(shipmentStatus.state);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const steps = [
    t("TICKET_CREATED"),
    t("PACKAGE_RECEIVED"),
    t("OUT_FOR_DELIVERY"),
    t("DELIVERED"),
  ];

  function shouldDisplayStatus(shipmentStatus: string, label: string) {
    return (
      (shipmentStatus === "CANCELLED" ||
        shipmentStatus === "NOT_YET_SHIPPED") &&
      (label === "Out for delivery" || label === "الشحنة خرجت للتسليم")
    );
  }

  return (
    <section className="border rounded-b-md px-2.5 py-3">
      <Stack sx={{ width: "100%" }} spacing={4}>
        <Stepper
          sx={{
            display: "flex",
            flexDirection: isSmallScreen
              ? "column" // For small screens, set flexDirection to column
              : lang === "en"
              ? "row" // For large screens in English, set flexDirection to row
              : "row-reverse", // For large screens in other languages, set flexDirection to row-reverse
          }}
          orientation={isSmallScreen ? "vertical" : "horizontal"}
          alternativeLabel
          activeStep={shipmentStatusHandler(shipment.CurrentStatus.state)?.step}
          connector={
            <ColorlibConnector
              colorstatus={
                shipmentStatusHandler(shipment.CurrentStatus.state)?.color
              }
            />
          }
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={(props) => (
                  <ColorlibStepIcon
                    {...props}
                    shipmentStatus={shipment.CurrentStatus}
                    icon={index + 1}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  />
                )}
              >
                <p className="sm:mt-5 flex flex-col gap-1 items-center justify-center">
                  <span> {label}</span>
                  {shouldDisplayStatus(shipment.CurrentStatus.state, label) && (
                    <span
                      className="capitalize font-semibold"
                      style={{
                        color: shipment?.CurrentStatus
                          ? shipmentStatusHandler(shipment?.CurrentStatus.state)
                              ?.color
                          : "red",
                      }}
                    >
                      {t(shipment.CurrentStatus.state)}
                    </span>
                  )}
                </p>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </section>
  );
}
