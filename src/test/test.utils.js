import checkPropTypes from "check-prop-types";

/**
 * Returns node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttrs = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

// checks prop type
export const checkProps = (components, conformingProps) => {
  const propError = checkPropTypes(
    components.propTypes,
    conformingProps,
    "props",
    components.name
  );
  expect(propError).toBeUndefined();
};