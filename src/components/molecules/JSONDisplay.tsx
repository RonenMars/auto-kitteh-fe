import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '@components/pages/Home.tsx';
import CodeEditor from '@uiw/react-textarea-code-editor';
import rehypePrism from 'rehype-prism-plus';
import rehypeRewrite from 'rehype-rewrite';
import { API } from '@api/index.ts';
import { useDebounce } from 'usehooks-ts';
import axios from 'axios';
import { TJSONFormat } from '@app-types/index.ts';

/**
 * JSONDisplay is a React component that displays and interacts with JSON data using a code editor.
 *
 * @component
 *
 * @returns {JSX.Element} A component for displaying and editing JSON data.
 */
export const JSONDisplay = () => {
  const { data, setData, selectedProp } = useContext(DataContext);
  const [localData, setLocalData] = useState(data);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const textRef = React.useRef();
  const debouncedValue = useDebounce<TJSONFormat>(localData, 1500);

  useEffect(() => {
    const validateJSON = async (JSONCollection: TJSONFormat) => {
      try {
        await API.post('/', { data: JSONCollection });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('data error', error);
          setError(error?.response?.data.message);
        }
      }
    };

    try {
      const parsedJSON = JSON.parse(debouncedValue.toString());
      setData(parsedJSON);
      setError('');
      validateJSON(debouncedValue);
    } catch (error) {
      validateJSON(debouncedValue);
    }
    setLoading(false);
  }, [debouncedValue]);

  const onJSONChange = (event: { target: { value: unknown } }) => {
    setLoading(true);
    setLocalData(event.target.value as unknown as TJSONFormat);
  };

  return (
    <div>
      {loading && (
        <div className="flex justify-center">
          <h2 className="absolute top-3 ">Loading...</h2>
        </div>
      )}
      <CodeEditor
        value={JSON.stringify(data, null, 4)}
        ref={textRef}
        language="json"
        rehypePlugins={[
          [rehypePrism, { ignoreMissing: true }],
          [
            rehypeRewrite,
            {
              rewrite: (node, index, parent) => {
                if (node.type === 'text') {
                  if (node.value === `"${selectedProp}"`) {
                    parent.properties.className.push('bg-[#ceb5ff]');
                  }
                }
              },
            },
          ],
        ]}
        placeholder="Please enter JSON code."
        onChange={onJSONChange}
        padding={15}
        style={{
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          fontSize: 12,
        }}
      />
      <div className="text-red text-sm whitespace-pre-wrap">{error}</div>
    </div>
  );
};
