import * as React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { CustomOptions } from "./Orderdata";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup, { useRadioGroup } from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import VariantOverride from "@mui/joy/styles/ColorInversion";
import { IosShare, VideoCameraBack } from "@mui/icons-material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const { cshowtype, optioniced, optionhot, valueoflist, setvalueoflist } =
    CustomOptions();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  //////////////////////////////////////////////////////////////////////////////////////////수상해

  const handlecheck = (event) => {
    console.log("handler started. listing");
    console.log(event.currentTarget);
    console.log("title as id");
    console.log(event.currentTarget.title);
    var a = event.currentTarget.title; //ass index
    var b = event.currentTarget.name;
    var c = event.target.checked;
    var d = event.currentTarget.checked;
    var newArr = valueoflist;
    if (b == "pulp") {
      newArr[a].pulp = newArr[a].pulp === "0" ? "1" : "0";
    } else if (b == "soymilk") {
      newArr[a].soymilk = newArr[a].soymilk === "0" ? "1" : "0";
    } else if (b == "whippedcream") {
      newArr[a].whippedcream = newArr[a].whippedcream === "0" ? "1" : "0";
    } else if (b == "excludesyrup") {
      newArr[a].excludesyrup = newArr[a].excludesyrup === "0" ? "1" : "0";
    } else if (b == "excludetopping") {
      newArr[a].excludetopping = newArr[a].excludetopping === "0" ? "1" : "0";
    } else if (b == "includedalgona") {
      newArr[a].includedalgona = newArr[a].includedalgona === "0" ? "1" : "0";
    } else if (b == "addhazelnutsyrup") {
      newArr[a].addhazelnutsyrup =
        newArr[a].addhazelnutsyrup === "0" ? "1" : "0";
    } else if (b == "addcinnamonsyrup") {
      console.log("u selected cinnamon");
      newArr[a].addcinnamonsyrup = !newArr[a].addcinnamonsyrup;
    } else if (b == "changenormalintosignature") {
      newArr[a].changenormalintosignature =
        newArr[a].changenormalintosignature === "0" ? "1" : "0";
    } else if (b == "changebanaintosignature") {
      newArr[a].changebanaintosignature =
        newArr[a].changebanaintosignature === "0" ? "1" : "0";
    } else {
      console.log("why else? shit");
    }
    setvalueoflist(newArr);
    console.log("updated.".concat("", valueoflist));
    console.log(valueoflist[event.currentTarget.title]);
    console.log("updated. really.");
  };

  const handleradio = (event) => {
    console.log("handler started. listing id,name,value");
    console.log(event.currentTarget);
    console.log("title as id");
    console.log(event.currentTarget.title);
    var a = event.currentTarget.title;
    var b = event.currentTarget.name;
    var c = event.currentTarget.value;
    var newArr = valueoflist;
    if (b === "ice") {
      newArr[a].ice = c;
    } else if (b === "water") {
      newArr[a].water = c;
    } else if (b === "sweet") {
      newArr[a].sweet = c;
    } else if (b === "shotamount") {
      newArr[a].shotamount = c;
    } else if (b === "changelatteorsoyfromset") {
      newArr[a].changelatteorsoyfromset = c;
    } else if (b === "pulp") {
      newArr[a].pulp = c;
      console.log("pulp value");
      console.log(newArr[a].pulp);
    } else if (b === "soymilk") {
      newArr[a].soymilk = c;
    } else if (b === "whippedcream") {
      newArr[a].whippedcream = c;
    } else if (b === "excludesyrup") {
      newArr[a].excludesyrup = c;
    } else if (b === "excludetopping") {
      newArr[a].excludetopping = c;
    } else if (b === "includedalgona") {
      newArr[a].includedalgona = c;
    } else if (b === "addhazelnutsyrup") {
      newArr[a].addhazelnutsyrup = c;
    } else if (b === "addcinnamonsyrup") {
      newArr[a].addcinnamonsyrup = c;
    } else if (b === "changenormalintosignature") {
      newArr[a].changenormalintosignature = c;
    } else if (b === "changebanaintosignature") {
      newArr[a].changebanaintosignature = c;
    } else if (b === "changelatteorsoyfromset") {
      newArr[a].changelatteorsoyfromset = c;
    } else {
      console.log("why else? pulp?");
    }
    setvalueoflist(newArr);
    console.log("updated.".concat("", valueoflist));
    console.log(valueoflist[event.currentTarget.title]);
  };

  //hot,iced갯수를받자
  var showtype = cshowtype;
  var hot = optionhot;
  var iced = optioniced;
  var list = []; //
  var id = 0;

  var trash = {
    id: -999,
    ice: 0, //기본 0 얼음많이1 얼음적게2 얼음없이3
    water: 0, //기본0 물양적게1 물양많이2
    sweet: 0, //기본0 더달게1 단맛줄임2
    shotamount: 0, //기본0 샷추가 1,(500원) 연한샷2
    pulp: 0, //기본0,과육제외1
    soymilk: 0, //기본 0두유로변경(라떼에서) 1
    whippedcream: 0, //휘핑추가: 안함 0 휘핑추가1 500원
    excludesyrup: 0, //기본0 시럽제외1
    excludetopping: 0, //기본 0 토핑제외1
    includedalgona: 0, //기본 0 달고나추가1(500원)
    addhazelnutsyrup: 0, //안함 0 헤이즐넛시럽추가1(500원)
    addcinnamonsyrup: 0, //안함 0 시나몬시럽추가1(500원)
    changenormalintosignature: 0, //안함 0 원두변경1(200)
    changebanaintosignature: 0, //안함 0 원두변경1(바나리카노400)
    changelatteorsoyfromset: 0, //안함 0 라떼로 변경1(세트만800)두유로 변경2(세트만800)
  };

  //list에 태그를다담아?
  if (showtype === 2) {
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"물양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양적게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양많이"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시그니처 원두변경"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시그니처 원두변경"
                />
              </RadioGroup>
              <Typography>시그니처 원두변경시 200원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "헤이즐넛 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="헤이즐넛 시럽추가"
                />
              </RadioGroup>
              <Typography>헤이즐넛 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시나몬 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시나몬 시럽추가"
                />
              </RadioGroup>
              <Typography>시나몬 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"라떼로 변경"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changelatteorsoyfromset"
                value={valueoflist[idxi].changelatteorsoyfromset}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="우유로 변경"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로 변경"
                />
              </RadioGroup>
              <Typography>라떼로 변경시 800원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"물양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양적게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양많이"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시그니처 원두변경"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시그니처 원두변경"
                />
              </RadioGroup>
              <Typography>시그니처 원두변경시 200원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "헤이즐넛 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="헤이즐넛 시럽추가"
                />
              </RadioGroup>
              <Typography>헤이즐넛 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시나몬 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시나몬 시럽추가"
                />
              </RadioGroup>
              <Typography>시나몬 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"라떼로 변경"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changelatteorsoyfromset"
                value={valueoflist[idxi].changelatteorsoyfromset}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="우유로 변경"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로 변경"
                />
              </RadioGroup>
              <Typography>라떼로 변경시 800원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 3) {
    //온도 샷조절 얼음 물양 헤이즐넛시럽추가 시나몬시럽추가

    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"물양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양적게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양많이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "헤이즐넛 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="헤이즐넛 시럽추가"
                />
              </RadioGroup>
              <Typography>헤이즐넛 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시나몬 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시나몬 시럽추가"
                />
              </RadioGroup>
              <Typography>시나몬 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }

    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"물양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양적게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양많이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "헤이즐넛 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="헤이즐넛 시럽추가"
                />
              </RadioGroup>
              <Typography>헤이즐넛 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시나몬 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시나몬 시럽추가"
                />
              </RadioGroup>
              <Typography>시나몬 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 4) {
    //iced only는 빈배열넣거라
    //iced only 샷양  물양 원두변경(400원)
    //iced
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"물양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양적게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양많이"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "바나시그니처 원두변경"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changebanaintosignature"
                value={valueoflist[idxi].changebanaintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시그니처 원두변경"
                />
              </RadioGroup>
              <Typography>시그니처 원두변경시 400원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 5) {
    //온도 샷조절 얼음 원두변경(200원) 두유로변경 헤이즐넛시럽추가 시나몬시럽추가

    //hot
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시그니처 원두변경"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시그니처 원두변경"
                />
              </RadioGroup>
              <Typography>시그니처 원두변경시 200원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "헤이즐넛 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="헤이즐넛 시럽추가"
                />
              </RadioGroup>
              <Typography>헤이즐넛 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시나몬 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시나몬 시럽추가"
                />
              </RadioGroup>
              <Typography>시나몬 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시그니처 원두변경"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시그니처 원두변경"
                />
              </RadioGroup>
              <Typography>시그니처 원두변경시 200원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "헤이즐넛 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="헤이즐넛 시럽추가"
                />
              </RadioGroup>
              <Typography>헤이즐넛 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시나몬 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시나몬 시럽추가"
                />
              </RadioGroup>
              <Typography>시나몬 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 6) {
    //온도 얼음 원두변경(200원) 당도 두유로변경 샷추가 휘핑추가

    //hot 핫
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시그니처 원두변경"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시그니처 원두변경"
                />
              </RadioGroup>
              <Typography>시그니처 원두변경시 200원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시그니처 원두변경"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시그니처 원두변경"
                />
              </RadioGroup>
              <Typography>시그니처 원두변경시 200원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 7) {
    //iced only 얼음 물양 헤이즐넛시럽추가 시나몬시럽추가

    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"물양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양적게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양많이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "헤이즐넛 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="헤이즐넛 시럽추가"
                />
              </RadioGroup>
              <Typography>헤이즐넛 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시나몬 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시나몬 시럽추가"
                />
              </RadioGroup>
              <Typography>시나몬 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 8) {
    //iced only 샷양 얼음 원두변경(200원) 휘핑추가 헤이즐넛시럽추가 시나몬시럽추가
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시그니처 원두변경"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시그니처 원두변경"
                />
              </RadioGroup>
              <Typography>시그니처 원두변경시 200원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "헤이즐넛 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="헤이즐넛 시럽추가"
                />
              </RadioGroup>
              <Typography>헤이즐넛 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시나몬 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시나몬 시럽추가"
                />
              </RadioGroup>
              <Typography>시나몬 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 9) {
    //iced only 당도 두유로변경 휘핑추가
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 11) {
    //온도 얼음 샷조절 물양 원두변경(200원) 당도

    //hot 핫
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"물양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양적게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양많이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시그니처 원두변경"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시그니처 원두변경"
                />
              </RadioGroup>
              <Typography>시그니처 원두변경시 200원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"물양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양적게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양많이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시그니처 원두변경"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시그니처 원두변경"
                />
              </RadioGroup>
              <Typography>시그니처 원두변경시 200원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 12) {
    //온도 얼음 원두변경 당도 두유로변경 샷추가 휘핑추가

    //hot 핫
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시그니처 원두변경"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시그니처 원두변경"
                />
              </RadioGroup>
              <Typography>시그니처 원두변경시 200원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시그니처 원두변경"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="changenormalintosignature"
                value={valueoflist[idxi].changenormalintosignature}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시그니처 원두변경"
                />
              </RadioGroup>
              <Typography>시그니처 원두변경시 200원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 13) {
    //온도 샷조절 얼음 물양 헤이즐넛시럽추가 시나몬시럽추가

    //hot 핫
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"물양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양적게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양많이"
                />
                <br></br>
                <FormControl>
                  <FormLabel id={"radio".concat("", id)}>
                    "헤이즐넛 시럽추가"
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby={"radio".concat("", id)}
                    name="addhazelnutsyrup"
                    value={valueoflist[idxi].addhazelnutsyrup}
                    onChange={handleradio}
                  >
                    <FormControlLabel
                      value="0"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="안함"
                    />
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="헤이즐넛 시럽추가"
                    />
                  </RadioGroup>
                  <Typography>
                    헤이즐넛 시럽추가시 500원이 추가됩니다.
                  </Typography>
                </FormControl>

                <br></br>
                <FormControl>
                  <FormLabel id={"radio".concat("", id)}>
                    "시나몬 시럽추가"
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby={"radio".concat("", id)}
                    name="addcinnamonsyrup"
                    value={valueoflist[idxi].addcinnamonsyrup}
                    onChange={handleradio}
                  >
                    <FormControlLabel
                      value="0"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="안함"
                    />
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="시나몬 시럽추가"
                    />
                  </RadioGroup>
                  <Typography>시나몬 시럽추가시 500원이 추가됩니다.</Typography>
                </FormControl>
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"물양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양적게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양많이"
                />
                <br></br>
                <FormControl>
                  <FormLabel id={"radio".concat("", id)}>
                    "헤이즐넛 시럽추가"
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby={"radio".concat("", id)}
                    name="addhazelnutsyrup"
                    value={valueoflist[idxi].addhazelnutsyrup}
                    onChange={handleradio}
                  >
                    <FormControlLabel
                      value="0"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="안함"
                    />
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="헤이즐넛 시럽추가"
                    />
                  </RadioGroup>
                  <Typography>
                    헤이즐넛 시럽추가시 500원이 추가됩니다.
                  </Typography>
                </FormControl>

                <br></br>
                <FormControl>
                  <FormLabel id={"radio".concat("", id)}>
                    "시나몬 시럽추가"
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby={"radio".concat("", id)}
                    name="addcinnamonsyrup"
                    value={valueoflist[idxi].addcinnamonsyrup}
                    onChange={handleradio}
                  >
                    <FormControlLabel
                      value="0"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="안함"
                    />
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio inputProps={{ title: "".concat("", idxi) }} />
                      }
                      label="시나몬 시럽추가"
                    />
                  </RadioGroup>
                  <Typography>시나몬 시럽추가시 500원이 추가됩니다.</Typography>
                </FormControl>
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 14) {
    //iced only 얼음 물양 헤이즐넛시럽추가 시나몬시럽추가
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"물양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="water"
                value={valueoflist[idxi].water}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양적게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="물양많이"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "헤이즐넛 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addhazelnutsyrup"
                value={valueoflist[idxi].addhazelnutsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="헤이즐넛 시럽추가"
                />
              </RadioGroup>
              <Typography>헤이즐넛 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>
                "시나몬 시럽추가"
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="addcinnamonsyrup"
                value={valueoflist[idxi].addcinnamonsyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시나몬 시럽추가"
                />
              </RadioGroup>
              <Typography>시나몬 시럽추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 15) {
    //iced only 당도 두유로변경 휘핑추가

    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 16) {
    //iced only 얼음 당도 두유로변경 샷추가

    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 17) {
    //온도 두유로변경

    //hot 핫
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 18) {
    //온도 당도 두유로변경 샷추가 달고나추가

    //hot 핫
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>달고나 추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="includedalgona"
                value={valueoflist[idxi].includedalgona}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="달고나추가"
                />
              </RadioGroup>
              <Typography>달고나 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>달고나 추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="includedalgona"
                value={valueoflist[idxi].includedalgona}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="달고나추가"
                />
              </RadioGroup>
              <Typography>달고나 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 19) {
    //iced only 얼음 당도 두유로변경 샷추가

    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 20) {
    //온도 얼음 당도 두유로변경 샷추가

    //hot 핫
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 21) {
    //온도 얼음 당도 두유로변경 샷추가 휘핑추가

    //hot 핫
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            //시럽제외
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>시럽제외</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="excludesyrup"
                value={valueoflist[idxi].excludesyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시럽제외"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
            //시럽제외
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>시럽제외</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="excludesyrup"
                value={valueoflist[idxi].excludesyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시럽제외"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 22) {
    //온도 얼음 당도 두유로변경 휘핑추가

    //hot 핫
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 23) {
    //iced only 당도

    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 24) {
    //온도조절 두유로변경

    //hot 핫
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            //두유로 변경(라뗴를)
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            //두유로 변경(라뗴를)
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 25) {
    //iced only 얼음 당도 두유로변경 휘핑추가

    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 26) {
    //온도조절 당도 두유로변경 토핑제외 샷추가 휘핑추가

    //hot 핫
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>토핑</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="excludetopping"
                value={valueoflist[idxi].excludetopping}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="토핑제외"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>토핑</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="excludetopping"
                value={valueoflist[idxi].excludetopping}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="토핑제외"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 27) {
    //iced only
    //옵션이없다..
  } else if (showtype === 28) {
    //iced only 당도 시럽제외

    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>시럽제외</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="excludesyrup"
                value={valueoflist[idxi].excludesyrup}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="시럽제외"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 29) {
    //iced only 휘핑 샷추가

    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 30) {
    //iced only 휘핑 두유로변경 샷추가

    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>휘핑추가</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="whippedcream"
                value={valueoflist[idxi].whippedcream}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="안함"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="휘핑추가"
                />
              </RadioGroup>
              <Typography>휘핑크림 추가시 500원이 추가됩니다.</Typography>
            </FormControl>

            <FormControl>
              <FormLabel id={"radio".concat("", id)}>두유로 변경</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="soymilk"
                value={valueoflist[idxi].soymilk}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="두유로변경"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 31) {
    //온도조절 당도

    //hot 핫
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 32) {
    //온도조절 얼음

    //hot 핫
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      );
    }
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 33) {
    //iced only 얼음 당도

    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 34) {
    //온도조절 얼음 당도

    //hot 핫
    for (var i = 0; i < hot; i++) {
      id++;
      var idxi = i;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>HOT {i + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 35) {
    //iced only 얼음 과육제외 샷추가

    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"과육제외"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="pulp"
                value={valueoflist[idxi].pulp}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="복숭아과육빼고"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>샷조절</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="shotamount"
                value={valueoflist[idxi].shotamount}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="샷추가"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="연한샷"
                />
              </RadioGroup>
              <Typography>샷추가시 500원이 추가됩니다.</Typography>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else if (showtype === 36) {
    //iced only 얼음 덜달게

    //iced 아이스
    for (var j = 0; j < iced; j++) {
      id++;
      var idxi = j + 25;
      list.push(
        <Accordion
          expanded={expanded === "panel".concat("", id)}
          onChange={handleChange("panel".concat("", id))}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id={"panel1d-header".concat("", id)}
          >
            <Typography>ICED {j + 1}번 음료</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>"얼음양"</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="ice"
                value={valueoflist[idxi].ice}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음많이"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음적게"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="얼음없이"
                />
              </RadioGroup>
            </FormControl>

            <br></br>
            <FormControl>
              <FormLabel id={"radio".concat("", id)}>당도</FormLabel>
              <RadioGroup
                row
                aria-labelledby={"radio".concat("", id)}
                name="sweet"
                value={valueoflist[idxi].sweet}
                onChange={handleradio}
              >
                <FormControlLabel
                  value="0"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="기본"
                />
                <FormControlLabel
                  value="1"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="더달게"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio inputProps={{ title: "".concat("", idxi) }} />
                  }
                  label="단맛줄임"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      );
    }
  } else {
  }

  return <div>{list}</div>;
}
