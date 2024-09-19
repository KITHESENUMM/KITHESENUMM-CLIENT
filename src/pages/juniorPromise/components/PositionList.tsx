import styled from '@emotion/styled';

interface positionListPropType {
  position: string;
  handleChipPosition: (positionName: string) => void;
  chipPositionName: string[];
}
export const PositionList = (props: positionListPropType) => {
  const { position, handleChipPosition, chipPositionName } = props;
  const isSelected = chipPositionName.includes(position);

  const onSelected = () => {
    handleChipPosition(position);
  };
  return (
    <>
      <PositionTitle $selectedPositionIndex={isSelected} onClick={onSelected}>
        {position}
      </PositionTitle>
    </>
  );
};

const PositionTitle = styled.p<{ $selectedPositionIndex: boolean }>`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
  border: 1px solid
    ${({ theme, $selectedPositionIndex }) =>
      $selectedPositionIndex ? theme.colors.transparentBlue_50 : theme.colors.grayScaleLG2};
  border-radius: 8px;

  background: ${({ theme, $selectedPositionIndex }) =>
    $selectedPositionIndex ? theme.colors.primaryBlue50 : theme.colors.grayScaleLG2};

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  color: ${({ theme, $selectedPositionIndex }) =>
    $selectedPositionIndex ? theme.colors.Blue : theme.colors.grayScaleDG};
`;
