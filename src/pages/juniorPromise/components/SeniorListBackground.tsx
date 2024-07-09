import styled from '@emotion/styled';
import { ArrowDownIc, ResetIc, Line292Ic } from '../../../assets/svgs/index';

export const SeniorListBackground = () => {
  return (
    <>
      <ListBackground>
        <SeniorSearchWrapper>
          <SearchTitle>선배를 찾아볼까요?</SearchTitle>
          <BtnLayout>
            <FilterBtnContainer>
              <FilterBtn type="button">
                계열
                <ArrowDownIc />
              </FilterBtn>
              <FilterBtn type="button">
                직무
                <ArrowDownIc />
              </FilterBtn>
            </FilterBtnContainer>
            <LineWrapper>
              <Line292Ic />
            </LineWrapper>
            <ResetIc />
          </BtnLayout>
        </SeniorSearchWrapper>
      </ListBackground>
    </>
  );
};

const ListBackground = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem 0 2rem;
  border-radius: 16px 16px 0 0;

  background: ${({ theme }) => theme.colors.grayScaleWG};
`;

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
const FilterBtnContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;
const FilterBtn = styled.button`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  width: 6.3rem;
  padding: 0.8rem 1rem;
  border-radius: 6px;

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  background: ${({ theme }) => theme.colors.grayScaleLG2};
`;

const LineWrapper = styled.div`
  padding-left: 13.7rem;
`;
