import React from 'react'
import { GithubPicker, PhotoshopPicker } from 'react-color'
import "./componentsStyles.css"


const colors = [
  '#B80000', '#DB3E00', '#FCCB00',
  '#008B02', '#006B76', '#5300EB',
  '#EB9694', '#FAD0C3', '#FEF3BD',
  '#C1E1C5', '#BEDADC', '#D4C4FB'];
const ColorPicker = ({onChangeComplete, color}) => (
      <GithubPicker className="colorPicker"
        colors={colors}
        color={ color}
        onChangeComplete={onChangeComplete}
      />
);

export default ColorPicker