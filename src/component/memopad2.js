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
              control={<Radio inputProps={{ title: "".concat("", idxi) }} />}
              label="기본"
            />
            <FormControlLabel
              value="1"
              control={<Radio inputProps={{ title: "".concat("", idxi) }} />}
              label="얼음많이"
            />
            <FormControlLabel
              value="2"
              control={<Radio inputProps={{ title: "".concat("", idxi) }} />}
              label="얼음적게"
            />
            <FormControlLabel
              value="3"
              control={<Radio inputProps={{ title: "".concat("", idxi) }} />}
              label="얼음없이"
            />
          </RadioGroup>
        </FormControl>

        <br></br>
        <FormControl>
          <FormLabel id={"radio".concat("", id)}>"placeforlabel"</FormLabel>
          <RadioGroup
            row
            aria-labelledby={"radio".concat("", id)}
            name="sweet"
            value={valueoflist[idxi].sweet}
            onChange={handleradio}
          >
            <FormControlLabel
              value="0"
              control={<Radio inputProps={{ title: "".concat("", idxi) }} />}
              label="기본"
            />
            <FormControlLabel
              value="1"
              control={<Radio inputProps={{ title: "".concat("", idxi) }} />}
              label="더달게"
            />
            <FormControlLabel
              value="2"
              control={<Radio inputProps={{ title: "".concat("", idxi) }} />}
              label="단맛줄임"
            />
          </RadioGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
}
