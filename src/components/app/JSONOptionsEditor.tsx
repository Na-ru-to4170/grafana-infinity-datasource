import React, { useState } from 'react';
import { Checkbox, Drawer, Button } from '@grafana/ui';
import { InfinityQuery } from '../../types';

interface JSONOptionsEditorProps {
  query: InfinityQuery;
  onChange: (value: any) => void;
  onRunQuery: (value: any) => void;
}

export const JSONOptionsEditor = (props: JSONOptionsEditorProps) => {
  const [popupStatus, setPopupStatus] = useState(false);
  const { query, onChange } = props;
  const { json_options = {} } = query;
  const onRootIsNotArrayChange = (root_is_not_array: boolean) => {
    onChange({
      ...query,
      json_options: {
        ...query.json_options,
        root_is_not_array,
      },
    });
  };
  return (
    <>
      <div style={{ padding: 'auto 15px;' }}>
        <Button
          variant="secondary"
          size="sm"
          style={{ margin: '5px' }}
          onClick={(e) => {
            setPopupStatus(!popupStatus);
            e.preventDefault();
          }}
        >
          JSON options
        </Button>
      </div>
      {popupStatus === true && (
        <Drawer title="Advanced JSON parsing options" onClose={() => setPopupStatus(!popupStatus)}>
          <div className="gf-form">
            <label className="gf-form-label query-keyword width-14">Root returns object instead array?</label>
            <Checkbox
              css={{}}
              value={json_options.root_is_not_array}
              onChange={(e) => onRootIsNotArrayChange(e.currentTarget.checked)}
            ></Checkbox>
          </div>
        </Drawer>
      )}
    </>
  );
};
