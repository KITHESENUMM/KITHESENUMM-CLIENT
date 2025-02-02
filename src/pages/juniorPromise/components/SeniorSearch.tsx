import { ResetIc, Line292Ic, CloseIc } from '@assets/svgs';
import styled from '@emotion/styled';
import { FilterButton } from './FilterButton';
import { ReactNode } from 'react';

interface SeniorSearchPropTypes {
  children: ReactNode;
  handleFilterActiveBtn: (btnText: string) => void;
  handleReset: () => void;
  chipPositionName: string[];
  chipFieldName: string[];
  deleteFieldList: (chipName: string) => void;
  handleChipField: (fieldName: string) => void;
  deletePositionList: (chipName: string) => void;
  handleChipPosition: (positionName: string) => void;
  $chipFieldName: string[];
  $chipPositionName: string[];
}
interface SelectedChipListProps {
  $chipFieldName: string[];
  $chipPositionName: string[];
}

export const SeniorSearch = (props: SeniorSearchPropTypes) => {
  const {
    children,
    handleFilterActiveBtn,
    handleReset,
    chipFieldName,
    deleteFieldList,
    handleChipField,
    chipPositionName,
    deletePositionList,
    handleChipPosition,
  } = props;
  const handleDeleteFieldChip = (field: string) => {
    deleteFieldList(field);
    handleChipField(field);
  };

  const handleDeletePositionChip = (position: string) => {
    deletePositionList(position);
    handleChipPosition(position);
  };
  return (
    <>
      <SeniorSearchWrapper>
        <SearchTitle>선배를 찾아볼까요?</SearchTitle>
        <BtnLayout>
          <FilterButton
            handleFilterActiveBtn={handleFilterActiveBtn}
            chipPositionName={chipPositionName}
            chipFieldName={chipFieldName}
          />
          <LineWrapper>
            <Line292Ic />
          </LineWrapper>
          <ResetIcon onClick={handleReset} />
        </BtnLayout>
        <SelectedChipList $chipFieldName={chipFieldName} $chipPositionName={chipPositionName}>
          {chipFieldName.map((field, fieldId) => (
            <Chip key={fieldId}>
              {field}
              <CloseIcon onClick={() => handleDeleteFieldChip(field)}>
                <CloseIc />
              </CloseIcon>
            </Chip>
          ))}
          {chipPositionName.map((position, positionId) => (
            <Chip key={positionId}>
              {position}
              <CloseIcon onClick={() => handleDeletePositionChip(position)}>
                <CloseIc />
              </CloseIcon>
            </Chip>
          ))}
        </SelectedChipList>
      </SeniorSearchWrapper>
      {children}
    </>
  );
};

const SeniorSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchTitle = styled.h2`
  display: flex;
  align-items: center;

  padding: 1rem 21.8rem 0.9rem 2rem;

  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

const BtnLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.7rem 2rem;
`;
const SelectedChipList = styled.div<SelectedChipListProps>`
  display: ${({ $chipFieldName, $chipPositionName }) =>
    $chipFieldName.length > 0 || $chipPositionName.length > 0 ? 'flex' : 'none'};
  gap: 0.8rem;
  align-items: center;
  overflow: scroll hidden;

  height: 4.4rem;
  margin: 0 2rem;
  padding: 0.7rem 0;

  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Chip = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;

  height: 3.3rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.primaryBlue50};

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;

const CloseIcon = styled(CloseIc)`
  padding: 0.4962rem 0.4839rem 0.4962rem 0.5084rem;

  cursor: pointer;
`;

const LineWrapper = styled.div`
  padding-left: 13.7rem;
`;

const ResetIcon = styled(ResetIc)`
  cursor: pointer;
`;
