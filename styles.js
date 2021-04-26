import { StyleSheet } from 'react-native';

export const colors = {
  darkBg: '#222',
  lightBg: '#333',
  darkHl: '#666',
  lightHl: '#888',
  pink: '#ea3372',
  text: '#fff',
  textSec: '#aaa',
};

export const gridSystem = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: 8,
    backgroundColor: colors.lightBg,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '700',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.text,
    fontSize: 30,
  },
  info: {
    color: colors.textSec,
    fontWeight: '600',
  },
  divider: {
    borderBottomColor: '#444',
    borderBottomWidth: 1,
    marginVertical: 24,
  },
  absoluteFull: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pink,
  },
});
