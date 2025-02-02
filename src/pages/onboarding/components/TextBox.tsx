import styled from '@emotion/styled';
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

interface InnerButtonProps {
  text: string;
  onClick?: () => void;
}

export const InnerButton = ({ text, onClick }: InnerButtonProps) => {
  return (
    <Button type="button" onClick={onClick}>
      {text}
    </Button>
  );
};

interface InputBoxPropType
  extends Pick<InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'value' | 'onChange' | 'maxLength' | 'disabled'> {
  label: string;
  type?: 'text' | 'file';
  isError?: boolean;
  text?: string;
  children?: ReactNode;
}

export const InputBox = forwardRef<HTMLInputElement, InputBoxPropType>(function InputBox(
  { label, children, isError = false, type = 'text', text, ...inputElements },
  ref
) {
  return (
    <InputWrapper>
      {type === 'text' ? (
        <Input type={type} id={label} {...inputElements} $isError={isError} />
      ) : (
        <FileLabel $isError={isError}>
          <FileText $isDefault={text === inputElements.placeholder}>{text}</FileText>
          <FileInput type="file" accept="image/*, .pdf" ref={ref} {...inputElements} />
        </FileLabel>
      )}
      {children}
    </InputWrapper>
  );
});

export const Caption = ({ children, isValid = false }: { children: string; isValid?: boolean }) => {
  return <CaptionText $isValid={isValid}>{children}</CaptionText>;
};

interface TextBoxProps {
  label: string;
  children: ReactNode;
}

export const TextBox = ({ label, children }: TextBoxProps) => {
  return (
    <Wrapper>
      <LabelText htmlFor={label}>{label}</LabelText>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const LabelText = styled.label`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const InputWrapper = styled.div`
  position: relative;
`;
const Input = styled.input<{ $isError: boolean }>`
  overflow-y: scroll;

  width: 100%;
  height: 5.1rem;
  margin-top: 0.4rem;
  padding: 1rem 1.5rem;
  ${({ theme }) => theme.fonts.Title2_M_16};
  border: ${({ $isError, theme }) => ($isError ? `1px solid ${theme.colors.Red}` : 'none')};
  border-radius: 8px;

  background-color: ${({ $isError, theme }) => ($isError ? theme.colors.transparentRed_3 : theme.colors.grayScaleLG1)};

  color: ${({ theme }) => theme.colors.grayScaleBG};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScaleMG2};
  }
`;

const CaptionText = styled.p<{ $isValid: boolean }>`
  ${({ theme }) => theme.fonts.Caption3_M_12};
  color: ${({ theme, $isValid }) => ($isValid ? theme.colors.grayScaleBG : theme.colors.grayScaleMG2)};
`;

const Button = styled.button`
  display: inline;
  position: absolute;
  top: 0.4rem;
  right: 0;

  width: fit-content;
  height: 3.1rem;
  margin: 1rem 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.grayScaleBG};

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const FileLabel = styled.label<{ $isError: boolean }>`
  display: flex;
  align-items: center;

  width: 100%;
  height: 5.1rem;
  margin-top: 0.4rem;
  padding: 1rem 1.5rem;
  border: ${({ $isError, theme }) => ($isError ? `1px solid ${theme.colors.Red}` : 'none')};
  border-radius: 8px;

  background-color: ${({ $isError, theme }) => ($isError ? theme.colors.transparentRed_3 : theme.colors.grayScaleLG1)};

  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

const FileText = styled.span<{ $isDefault: boolean }>`
  overflow: hidden;

  width: calc(100% - 7rem);

  ${({ theme }) => theme.fonts.Title2_M_16};
  color: ${({ $isDefault, theme }) => ($isDefault ? theme.colors.grayScaleMG2 : theme.colors.grayScaleBG)};
  text-overflow: ellipsis;

  white-space: nowrap;
`;
