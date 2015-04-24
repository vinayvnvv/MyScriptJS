'use strict';

(function (scope) {
    /**
     * Text tag item
     *
     * @class TextTagItem
     * @param {Object} [obj]
     * @constructor
     */
    function TextTagItem (obj) {
        this.inkRanges = [];
        if (obj) {
            if (obj.tagType) {
                this.tagType = obj.tagType;
            }
            if (obj.inkRanges) {
                var ranges = obj.inkRanges.split(/[\s]+/);
                for (var i in ranges) {
                    this.inkRanges.push(new scope.TextInkRanges(ranges[i]));
                }
            }
        }
    }

    /**
     * Get tag type
     *
     * @method getTagType
     * @returns {String}
     */
    TextTagItem.prototype.getTagType = function () {
        return this.tagType;
    };

    /**
     * Get ink ranges
     *
     * @method getInkRanges
     * @returns {TextInkRanges[]}
     */
    TextTagItem.prototype.getInkRanges = function () {
        return this.inkRanges;
    };

    // Export
    scope.TextTagItem = TextTagItem;
})(MyScript);