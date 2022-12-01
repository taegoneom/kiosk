

//hot 핫
for (var i = 0; i < hot; i++) {
  id++;
  var idxi=i;
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






      </AccordionDetails>
    </Accordion>
  );
}
//iced 아이스
for (var j = 0; j <iced; j++) {
  id++;
  var idxi=j+25;
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
       




      </AccordionDetails>
    </Accordion>
  );
}













//얼음양(iced only)
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
    control={<Radio inputProps={{ title: "".concat("",idxi) }} />}
    label="기본"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi) }} />}
    label="얼음많이"
  />
  <FormControlLabel
    value="2"
    control={<Radio inputProps={{ title: "".concat("",idxi) }} />}
    label="얼음적게"
  />
    <FormControlLabel
    value="3"
    control={<Radio inputProps={{ title: "".concat("",idxi) }} />}
    label="얼음없이"
  />
</RadioGroup>
</FormControl>


//물양
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
    control={<Radio inputProps={{ title: "".concat("",idxi) }} />}
    label="기본"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi) }} />}
    label="물양적게"
  />
  <FormControlLabel
    value="2"
    control={<Radio inputProps={{ title: "".concat("",idxi) }} />}
    label="물양많이"
  />

</RadioGroup>
</FormControl>


//당도
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
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="기본"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="더달게"
  />
  <FormControlLabel
    value="2"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="단맛줄임"
  />
</RadioGroup>
</FormControl>




//샷
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
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="기본"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="샷추가"
  />
  <FormControlLabel
    value="2"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="연한샷"
  />
</RadioGroup>
<Typography>샷추가시 500원이 추가됩니다.</Typography>
</FormControl>





//과육제외
<br></br>
<FormControl>
<FormLabel id={"radio".concat("", id)}>과육제외</FormLabel>
<RadioGroup
  row
  aria-labelledby={"radio".concat("", id)}
  name=""
  value={valueoflist[idxi]."pulp"}
  onChange={handleradio}
>
  <FormControlLabel
    value="0"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="기본"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="복숭아과육빼고"
  />

</RadioGroup>
</FormControl>

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
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="기본"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="두유로변경"
  />

</RadioGroup>
</FormControl>

//휘핑추가
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
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="안함"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
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
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="기본"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="시럽제외"
  />

</RadioGroup>
</FormControl>

//토핑
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
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="기본"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="토핑제외"
  />

</RadioGroup>
</FormControl>

//달고나 추가
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
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="기본"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="달고나추가"
  />

</RadioGroup>
<Typography>달고나 추가시 500원이 추가됩니다.</Typography>
</FormControl>

//헤이즐넛 시럽추가
<br></br>
<FormControl>
<FormLabel id={"radio".concat("", id)}>"헤이즐넛 시럽추가"</FormLabel>
<RadioGroup
  row
  aria-labelledby={"radio".concat("", id)}
  name="addhazelnutsyrup"
  value={valueoflist[idxi].addhazelnutsyrup}
  onChange={handleradio}
>
  <FormControlLabel
    value="0"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="안함"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="헤이즐넛 시럽추가"
  />

</RadioGroup>
<Typography>헤이즐넛 시럽추가시 500원이 추가됩니다.</Typography>
</FormControl>

//시나몬 시럽추가
<br></br>
<FormControl>
<FormLabel id={"radio".concat("", id)}>"시나몬 시럽추가"</FormLabel>
<RadioGroup
  row
  aria-labelledby={"radio".concat("", id)}
  name="addcinnamonsyrup"
  value={valueoflist[idxi].addcinnamonsyrup}
  onChange={handleradio}
>
  <FormControlLabel
    value="0"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="안함"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="시나몬 시럽추가"
  />

</RadioGroup>
<Typography>시나몬 시럽추가시 500원이 추가됩니다.</Typography>
</FormControl>

//시그니처 원두변경
<br></br>
<FormControl>
<FormLabel id={"radio".concat("", id)}>"시그니처 원두변경"</FormLabel>
<RadioGroup
  row
  aria-labelledby={"radio".concat("", id)}
  name="changenormalintosignature"
  value={valueoflist[idxi].changenormalintosignature}
  onChange={handleradio}
>
  <FormControlLabel
    value="0"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="안함"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="시그니처 원두변경"
  />

</RadioGroup>
<Typography>시그니처 원두변경시 200원이 추가됩니다.</Typography>
</FormControl>


//바나시그니처 원두변경
<br></br>
<FormControl>
<FormLabel id={"radio".concat("", id)}>"바나시그니처 원두변경"</FormLabel>
<RadioGroup
  row
  aria-labelledby={"radio".concat("", id)}
  name="changebanaintosignature"
  value={valueoflist[idxi].changebanaintosignature}
  onChange={handleradio}
>
  <FormControlLabel
    value="0"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="안함"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="시그니처 원두변경"
  />

</RadioGroup>
<Typography>시그니처 원두변경시 400원이 추가됩니다.</Typography>
</FormControl>



//라떼로 변경
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
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="안함"
  />
  <FormControlLabel
    value="1"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="우유로 변경"
  />
    <FormControlLabel
    value="2"
    control={<Radio inputProps={{ title: "".concat("",idxi ) }} />}
    label="두유로 변경"
  />


</RadioGroup>
<Typography>라떼로 변경시 800원이 추가됩니다.</Typography>
</FormControl>
